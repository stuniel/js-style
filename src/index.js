const properties = require('./properties')
const webkitProperties = require('./webkitProperties')
const utils = require('./utils')

const jsStyle = function() {
  const { removePrefix, formatOutput, formatNest } = utils
  const props = [properties, webkitProperties]

  let state = {
    body: {},
    nested: [],
  }

  const prefixes = {
    extension: 'ext-',
    add: 'add-',
  }

  props.forEach(prop => {
    Object.keys(prop).forEach(key => {
      jsStyle[key] = function(value) {
        state.body[prop[key]] = value
        return this
      }
    })
  })
  
  jsStyle.add = function(prop, value) {
    if(typeof prop === 'object') {
      Object.keys(prop).forEach(propName => {
        state.body[`${prefixes.add}${propName}`] = prop[propName]
      })
    } else {
      state.body[prop] = value
    }
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

  jsStyle.selector = function(selector) {
    state.body.selector = selector
    return this
  }

return jsStyle
}

module.exports = jsStyle
