const properties = require('./properties')
const webkitProperties = require('./webkitProperties')
const utils = require('./utils')

const jsStyle = function() {
  const { removePrefix, formatOutput, formatNest } = utils
  const props = properties
  const webkit = webkitProperties

  let state = {
    body: {},
    nested: [],
  }

  const prefixes = {
    extension: 'ext-'
  }

  Object.keys(props).forEach(key => {
    jsStyle[key] = function(value) {
      this.convert(props[key], value)
      return this
    }
  })

  Object.keys(webkit).forEach(key => {
    jsStyle[key] = function(value) {
      this.convert(webkit[key], value)
      return this
    }
  })

  jsStyle.convert = function(propName, value) {
    state.body[propName] = value
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

  jsStyle.selector = function(selector) {
    state.body.selector = selector
    return this
  }

return jsStyle
}

module.exports = jsStyle
