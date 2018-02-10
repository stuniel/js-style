const jsStyle = function() {
  let state = []

  jsStyle.render = function(propName, value) {
    state.push(`  ${propName}: ${value};`)
  }

  jsStyle.selector = function(selector) {
    // Resetting state to an empty array
    state = []
    state.push(`${selector} {`)
    return this
  }
  jsStyle.backgroundColor = function (value) {
    this.render('background-color', value)
    return this
  }

  jsStyle.color = function (value) {
    this.render('color', value)
    return this
  }

  jsStyle.position = function (value) {
    this.render('position', value)
    return this
  }

  jsStyle.width = function (value) {
    this.render('width', value)
    return this
  }

  jsStyle.height = function (value) {
    this.render('height', value)
    return this
  }

  jsStyle.close = function () {
    state.push('}')
    state.push('')
    state.forEach(line => console.log(line))
    return state
  }

  jsStyle.extend = function (arr) {
    arr.slice(1, -2).forEach(line => state.push(line))
    return this
  }

  return jsStyle
}

module.exports = jsStyle;
