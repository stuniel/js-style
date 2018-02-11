const properties = require('./properties')

const jsStyle = function() {

  let state = {
    body: {},
    nested: [],
  }

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
    Object.keys(state.body).forEach(function(key) {
      key = (key.indexOf('ext-') != -1) ?
        key.slice(4) :
        key
      key === 'selector' ?
        console.log(`${state.body[key]} {`) :
        console.log(`  ${key}: ${state.body[key]}`);
    });
    console.log('}')
    console.log('')
    state.nested.forEach(nest => {
      Object.keys(nest).forEach(function(key) {
        key === 'selector' ?
          console.log(`${nest[key]} {`) :
          console.log(`  ${key}: ${nest[key]}`)
      });
      console.log('}')
      console.log('')
    })

    return state
  }

  jsStyle.extend = function (arr) {
    Object.keys(arr.body).slice(1).forEach(function(key) {
      state.body[`ext-${key}`] = arr.body[key]
    });
    return this
  }

  jsStyle.nest = function (arr) {
    Object
      .keys(arr.body)
      .map(key => {
        return key === 'selector' ?
          arr.body[key] = `${state.body[key]} ${arr.body[key]}` :
          key
      })

    state.nested.push(arr.body)
    arr.nested.forEach(nest => {
      Object
      .keys(nest)
      .map(key => {
        return key === 'selector' ?
        nest[key] = `${state.body[key]} ${nest[key]}` :
        key
      })
      state.nested.push(nest)
    })
    return this
  }

  jsStyle.use = function () {
    return state
  }

return jsStyle
}

module.exports = jsStyle
