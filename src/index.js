const properties = require('./properties')
const utils = require('./utils')

const jsStyle = function() {

  let state = {
    body: {},
    nested: [],
  }

  const prefixes = {
    extension: 'ext-'
  }

  const { removePrefix, formatOutput, formatNest } = utils
  const props = properties
  Object.keys(props).forEach(key => {
    jsStyle[key] = props[key]
  })

  jsStyle.convert = function(propName, value) {
    state.body[propName] = value
  }

  jsStyle.selector = function(selector) {
    state.body.selector = selector
    return this
  }

  jsStyle.render = function () {
    formatOutput(state.body, prefixes)
    state.nested.forEach(nest => {
      formatOutput(nest, prefixes)
    })
    return state
  }

  jsStyle.extend = function (arr) {
    Object
      .keys(arr.body)
      .slice(1)
      .forEach(function(key) {
        // Add prefix to extended property name and assign it to state.body
        state.body[`${prefixes.extension}${key}`] = arr.body[key]
      });
    return this
  }

  jsStyle.nest = function (arr) {
    formatNest(arr.body, state)
    arr.nested.forEach(nest => {
      formatNest(nest, state)
    })
    return this
  }

  jsStyle.use = function () {
    return state
  }

  jsStyle.use = function () {
    return state
  }

return jsStyle
}

module.exports = jsStyle
