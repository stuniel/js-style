const properties = require('./properties')
const webkitProperties = require('./webkitProperties')
const utils = require('./utils')
const fs = require('fs')

const jsStyle = function() {
  const { close, formatPropertyWithPrefix, removePrefix, formatOutput, formatNest } = utils
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

  const config = {
    space: {
      body: {
        key: '',
        prop: '  ',
      },
      inclusion: {
        key: '  ',
        prop: '    ',
      },
    },
  }

  props.forEach(prop => {
    Object.keys(prop).forEach(key => {
      jsStyle[key] = function(value) {
        state.body = utils.formatPropertyWithPrefix(state.body, prop[key], value, prefixes.add)
        return this
      }
    })
  })

  jsStyle.add = function(prop, value) {
    if (typeof prop === 'object') {
      Object.keys(prop).forEach(propName => {
        state.body = utils.formatPropertyWithPrefix(state.body, propName, prop[propName], prefixes.add)
        // state.body[`${prefixes.add}${propName}`] = prop[propName]
      })
    } else {
      state.body = utils.formatPropertyWithPrefix(state.body, prop, value, prefixes.add)
      // state.body[`${prefixes.add}${prop}`] = value
    }
    return this
  }

  jsStyle.render = function() {
    let renderer = []
    renderer = renderer.concat(
      formatOutput(state.body, prefixes, config.space.body, state.included, config.space.inclusion),
    )

    state.nested.forEach(nest => {
      renderer = renderer.concat(formatOutput(nest, prefixes, config.space.body))
    })
    // Temporarily remove console.log in favour of `.write()` method
    // renderer.forEach(line => console.log(line))
    return renderer
  }

  jsStyle.extend = function(arr) {
    Object.keys(arr.body).forEach(function(key) {
      // Add prefix to extended property
      prefixedKey = `${prefixes.extension}${key}`
      // Remove selectors
      state.body =
        key === 'selector'
          ? state.body
          : // Check for repeating property name and assign property to state.body
            utils.formatPropertyWithPrefix(state.body, prefixedKey, arr.body[key], prefixes.extension)
    })
    return this
  }

  jsStyle.include = function(obj) {
    if (!Array.isArray(obj)) obj = [obj]
    obj.forEach(element => {
      state.included.push(element)
    })
    return this
  }

  jsStyle.nest = function(obj) {
    // Accept array of objects
    if (!Array.isArray(obj)) obj = [obj]
    obj.forEach(element => {
      state.nested.push(formatNest(element.body, state))
      element.nested.forEach(nest => {
        state.nested.push(formatNest(nest, state))
      })
    })
    return this
  }

  jsStyle.use = function() {
    return state
  }

  jsStyle.selector = function(selector) {
    state.body.selector = selector
    return this
  }

  jsStyle.write = function(data) {
    if (!Array.isArray(data)) data = [data]
    data.forEach(obj => {
      const output = obj.output
      const input = obj.input
      const formatOutput = output.indexOf('.css') === -1 ? `${output}.css` : output
      const formatInput = input.join('\n')

      fs.writeFile(formatOutput, formatInput, function(err) {
        if (err) {
          console.log('Failed to write file:', err)
        } else {
          console.log(`File written to '${formatOutput}'.`)
        }
      })
    })
  }

  return jsStyle
}

module.exports = jsStyle
