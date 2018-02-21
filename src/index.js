const properties = require('./properties')
const webkitProperties = require('./webkitProperties')
const utils = require('./utils')

const jsStyle = function() {
  const { close, removePrefix, formatOutput, formatNest, formatInclusion } = utils
  const props = [properties, webkitProperties]

  let state = {
    body: {},
    nested: [],
    included: [],
  }

  const prefixes = {
    extension: 'ext-',
    add: 'add-',
    inclusion: 'inc-',
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

  jsStyle.render = function() {
    const renderer = []
    formatOutput(state.body, prefixes, renderer)
    state.included.forEach(inclusion => {
      formatInclusion(inclusion.body, prefixes, renderer)
      close(renderer, 'inclusion')
      inclusion.nested.forEach(nest => {
        formatInclusion(nest, prefixes, renderer)
        close(renderer, 'inclusion')
      })
    })
    close(renderer)
    state.nested.forEach(nest => {
      formatOutput(nest, prefixes, renderer)
      close(renderer)
    })
    renderer.forEach(line => console.log(line))
    return renderer
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
  
  jsStyle.include = function(obj) {
    if (Array.isArray(obj)) {
      obj.forEach(element => {
        state.included.push(element)
      })
    } else {
      state.included.push(obj)
    }
    return this
  }

  jsStyle.nest = function(obj) {
    // Accept array of objects
    if (Array.isArray(obj)) {
      obj.forEach(element => {
        formatNest(element.body, state)
        element.nested.forEach(nest => {
          formatNest(nest, state)
        })
      })
    } else {
      formatNest(obj.body, state)
      obj.nested.forEach(nest => {
        formatNest(nest, state)
      })
    }
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
