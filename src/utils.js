const utils = {
  
  close: function(renderer, type) {
    switch (type) {
      case 'inclusion':
        renderer.push('  }')
        break
      default:
        renderer.push('}')
    }
    renderer.push('')
  },

  removePrefixes: function(key, prefixes) {
    let newKey = key
    const prefixesList = Object
      .keys(prefixes)
      .map(prefix => prefixes[prefix])

    prefixesList.forEach(prefix => {
      if (key.indexOf(prefix) !== -1) {
        newKey = key.slice(prefix.length)
      }
    })

    return prefixesList.some(prefix => (newKey.indexOf(prefix) !== -1)) ?
      this.removePrefixes(newKey, prefixes) :
      newKey
  },

  formatInclusion: function(obj, prefixes, renderer) {
    Object
      .keys(obj)
      .map(key => {
        switch(key) {
          case 'selector':
            return `  ${obj[key]} {`
          default:
            // Check for all prefixes in prefixes object
            let newKey = utils.removePrefixes(key, prefixes)
            return `    ${newKey}: ${obj[key]};`
        }
      })
      .forEach(key => renderer.push(key))
  },

  formatOutput: function(obj, prefixes, renderer) {
    Object
      .keys(obj)
      .map(key => {
        switch(key) {
          case 'selector':
            return `${obj[key]} {`
          default:
            // Check for all prefixes in prefixes object
            let newKey = utils.removePrefixes(key, prefixes)
            return `  ${newKey}: ${obj[key]};`
        }
      })
      .forEach(key => renderer.push(key))
  },

  formatNest: function(obj, state) {
    // Create object copy to prevent mutating the original one
    const newObj = Object.assign({}, obj)
    Object
      .keys(obj)
      .map(key => {
        return key === 'selector' ?
          newObj[key] = `${state.body[key]} ${obj[key]}` :
          key
      })
    state.nested.push(newObj)
  }

}

module.exports = utils
