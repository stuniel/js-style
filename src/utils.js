const utils = {
  close: function(type, space) {
    switch (type) {
      case 'inclusion':
        return [`${space}}`, '']
        break
      default:
        return [`${space || ''}}`, '']
    }
  },

  removePrefixes: function(key, prefixes) {
    let newKey = key
    const prefixesList = Object.keys(prefixes).map(prefix => prefixes[prefix])

    prefixesList.forEach(prefix => {
      if (key.indexOf(prefix) !== -1) {
        newKey = key.slice(prefix.length)
      }
    })

    return prefixesList.some(prefix => newKey.indexOf(prefix) !== -1) ? this.removePrefixes(newKey, prefixes) : newKey
  },

  formatOutput: function(obj, prefixes, space, included, spaceInclusion, close) {
    let output = Object.keys(obj).map(key => {
      switch (key) {
        case 'selector':
          return `${space.key}${obj[key]} {`
        default:
          // Check for all prefixes in prefixes object
          let newKey = utils.removePrefixes(key, prefixes)
          return `${space.prop}${newKey}: ${obj[key]};`
      }
    })
    // Add included output
    if (included) {
      included.forEach(inclusion => {
        output = output.concat(utils.formatOutput(inclusion.body, prefixes, spaceInclusion, null, null, 'inclusion'))
        inclusion.nested.forEach(nest => {
          output = output.concat(utils.formatOutput(nest, prefixes, spaceInclusion, null, null, 'inclusion'))
        })
      })
      output = output.concat(utils.close(close, space.key))
      return output
    } else {
      output = output.concat(utils.close(close, space.key))
      return output
    }
  },

  formatNest: function(obj, state) {
    // Create object copy to prevent mutating the original one
    const newObj = Object.assign({}, obj)
    Object.keys(obj).map(key => {
      return key === 'selector' ? (newObj[key] = `${state.body[key]} ${obj[key]}`) : key
    })
    return newObj
  },
}

module.exports = utils
