const properties = require('./properties')
const webkitProperties = require('./webkitProperties')
const utils = require('./utils')
const fs = require('fs')

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
        state.body[prop[key]] = value
        return this
      }
    })
  })

  jsStyle.add = function(prop, value) {
    if (typeof prop === 'object') {
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
    formatOutput(state.body, prefixes, renderer, config.space.body)
    state.included.forEach(inclusion => {
      formatOutput(inclusion.body, prefixes, renderer, config.space.inclusion)
      close(renderer, 'inclusion')
      inclusion.nested.forEach(nest => {
        formatOutput(nest, prefixes, renderer, config.space.inclusion)
        close(renderer, 'inclusion')
      })
    })
    close(renderer)
    state.nested.forEach(nest => {
      formatOutput(nest, prefixes, renderer, config.space.body)
      close(renderer)
    })
    // Temporarily remove console.log in favour of `.write()` method
    // renderer.forEach(line => console.log(line))
    return renderer
  }

  jsStyle.extend = function(arr) {
    Object.keys(arr.body)
      .slice(1)
      .forEach(function(key) {
        // Add prefix to extended property name and assign it to state.body
        state.body[`${prefixes.extension}${key}`] = arr.body[key]
      })
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
