const utils = {

  removePrefix: function(key, prefix) {
    const newKey = key
      .indexOf(prefix) !== -1 ?
        key.slice(prefix.length) :
        key
    // Check if there is a 'deeper' extension
    return newKey.indexOf(prefix) !== -1 ?
      removePrefix(newKey, prefix) :
      newKey
  },

  formatOutput: function(obj, prefixes) {
    Object
      .keys(obj)
      .map(key => {
        switch(key) {
          case 'selector':
            return `${obj[key]} {`
          default:
            let newKey
            // Check for all prefixes in prefixes object
            Object
              .keys(prefixes)
              .forEach(prefix => {
                // Remove prefixes from the key
                newKey = utils.removePrefix(key, prefixes[prefix])
              })
            return ` ${newKey}: ${obj[key]};`
        }
      })
      .forEach(key => console.log(key))
    // Add closing bracket and whitespace
    console.log('}')
    console.log('')
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
