const jsStyle = require('../src/index')

describe('use', function() {
  it('should return state', function() {
    const use = jsStyle().use()
    const output = { body: {}, nested: [], included: [] }
    expect(use).toEqual(output)
  })
})

describe('selector', function() {
  it('should return div selector', function() {
    const div = jsStyle().selector('div')
    const output = { selector: 'div' }
    expect(div.use().body).toEqual(output)
  })
})

describe('properties methods', function() {
  it('should return background-color red', function() {
    const bgColor = jsStyle().backgroundColor('red')
    const output = { 'background-color': 'red' }
    expect(bgColor.use().body).toEqual(output)
  })

  it('should return multiple properties only in body', function() {
    const table = jsStyle()
      .backgroundColor('red')
      .color('#3e3e3e')
      .position('absolute')
    const output = {
      'background-color': 'red',
      color: '#3e3e3e',
      position: 'absolute',
    }
    expect(table.use().body).toEqual(output)
    expect(table.use().nested).toEqual([])
    expect(table.use().included).toEqual([])
  })
})

describe('add', function() {
  it('should return background-color red', function() {
    const bgColor = jsStyle().add('background-color', 'red')
    const output = { 'background-color': 'red' }
    expect(bgColor.use().body).toEqual(output)
  })

  it('should return all properties', function() {
    const table = jsStyle()
      .add('background-color', 'blue')
      .backgroundColor('red')
      .color('#3e3e3e')
      .position('absolute')
    const output = {
      'background-color': 'blue',
      'add-background-color': 'red',
      color: '#3e3e3e',
      position: 'absolute',
    }
    expect(table.use().body).toEqual(output)
  })

  it('should return all properties', function() {
    const table = jsStyle()
      .add({
        'background-color': 'blue',
        color: '#4f4f4f',
        position: 'relative',
      })
      .backgroundColor('red')
      .color('#3e3e3e')
      .position('absolute')
    const output = {
      'background-color': 'blue',
      color: '#4f4f4f',
      position: 'relative',
      'add-background-color': 'red',
      'add-color': '#3e3e3e',
      'add-position': 'absolute',
    }
    expect(table.use().body).toEqual(output)
  })

  it('should return multiple properties only in body', function() {
    const table = jsStyle().add({
      'background-color': 'red',
      color: '#3e3e3e',
      position: 'absolute',
    })
    const output = {
      'background-color': 'red',
      color: '#3e3e3e',
      position: 'absolute',
    }
    expect(table.use().body).toEqual(output)
    expect(table.use().nested).toEqual([])
    expect(table.use().included).toEqual([])
  })
})

describe('extend', function() {
  it('should extend element', function() {
    const table = jsStyle()
      .backgroundColor('red')
      .color('#3e3e3e')
      .position('absolute')
      .use()

    const smallTable = jsStyle()
      .selector('.small-table')
      .extend(table)
      .width('200px')
      .use()

    const output = {
      selector: '.small-table',
      'ext-background-color': 'red',
      'ext-color': '#3e3e3e',
      'ext-position': 'absolute',
      width: '200px',
    }
    expect(smallTable.body).toEqual(output)
  })

  it('should extend multiple elements', function() {
    const table = jsStyle()
      .backgroundColor('red')
      .color('#3e3e3e')
      .position('absolute')
      .width('100%')
      .use()

    const small = jsStyle()
      .width('200px')
      .height('200px')
      .use()

    const smallTable = jsStyle()
      .selector('.small-table')
      .extend(table)
      .extend(small)
      .width('400px')
      .use()

    const output = {
      selector: '.small-table',
      'ext-background-color': 'red',
      'ext-color': '#3e3e3e',
      'ext-position': 'absolute',
      'ext-width': '100%',
      'ext-ext-width': '200px',
      'ext-height': '200px',
      width: '400px',
    }
    expect(smallTable.body).toEqual(output)
  })

  it('should remove selector from extended element', function() {
    const table = jsStyle()
      .selector('.table')
      .backgroundColor('red')
      .color('#3e3e3e')
      .position('absolute')
      .use()

    const smallTable = jsStyle()
      .selector('.small-table')
      .extend(table)
      .width('200px')
      .use()

    const output = {
      selector: '.small-table',
      'ext-background-color': 'red',
      'ext-color': '#3e3e3e',
      'ext-position': 'absolute',
      width: '200px',
    }
    expect(smallTable.body).toEqual(output)
  })
})

describe('include', function() {
  it('should include single element', function() {
    const table = jsStyle()
      .selector('.table')
      .backgroundColor('red')
      .color('#3e3e3e')
      .position('absolute')
      .use()

    const smallScreen = jsStyle()
      .selector('@media (max-width:480px)')
      .include(table)
      .use()

    const bodyOutput = {
      selector: '@media (max-width:480px)',
    }
    const includedOutput = [
      {
        body: {
          selector: '.table',
          'background-color': 'red',
          color: '#3e3e3e',
          position: 'absolute',
        },
        nested: [],
        included: [],
      },
    ]

    expect(smallScreen.body).toEqual(bodyOutput)
    expect(smallScreen.included).toEqual(includedOutput)
  })

  it('should include multiple elements', function() {
    const table = jsStyle()
      .selector('.table')
      .backgroundColor('red')
      .color('#3e3e3e')
      .position('absolute')
      .use()

    const button = jsStyle()
      .selector('.button')
      .backgroundColor('blue')
      .color('#000000')
      .position('fixed')
      .use()

    const smallScreen = jsStyle()
      .selector('@media (max-width:480px)')
      .include(table)
      .include(button)
      .use()

    const bodyOutput = {
      selector: '@media (max-width:480px)',
    }
    const includedOutput = [
      {
        body: {
          selector: '.table',
          'background-color': 'red',
          color: '#3e3e3e',
          position: 'absolute',
        },
        nested: [],
        included: [],
      },
      {
        body: {
          selector: '.button',
          'background-color': 'blue',
          color: '#000000',
          position: 'fixed',
        },
        nested: [],
        included: [],
      },
    ]

    expect(smallScreen.body).toEqual(bodyOutput)
    expect(smallScreen.included).toEqual(includedOutput)
  })
})

describe('nest', function() {
  it('should nest single element', function() {
    const table = jsStyle()
      .selector('.table')
      .backgroundColor('red')
      .color('#3e3e3e')
      .position('absolute')
      .use()

    const header = jsStyle()
      .selector('.header')
      .backgroundColor('blue')
      .nest(table)
      .use()

    const output = {
      body: {
        selector: '.header',
        'background-color': 'blue',
      },
      nested: [
        {
          selector: '.header .table',
          'background-color': 'red',
          color: '#3e3e3e',
          position: 'absolute',
        },
      ],
      included: [],
    }

    expect(header).toEqual(output)
  })

  it('should nest multiple elements', function() {
    const link = jsStyle()
      .selector('.link')
      .color('blue')
      .use()

    const cell = jsStyle()
      .selector('.cell')
      .backgroundColor('#ffffff')
      .color('#000000')
      .position('relative')
      .use()

    const table = jsStyle()
      .selector('.table')
      .backgroundColor('red')
      .color('#3e3e3e')
      .position('absolute')
      .use()

    const header = jsStyle()
      .selector('.header')
      .backgroundColor('blue')
      .nest(table)
      .nest(cell)
      .nest(link)
      .use()

    const output = {
      body: {
        selector: '.header',
        'background-color': 'blue',
      },
      nested: [
        {
          selector: '.header .table',
          'background-color': 'red',
          color: '#3e3e3e',
          position: 'absolute',
        },
        {
          selector: '.header .cell',
          'background-color': '#ffffff',
          color: '#000000',
          position: 'relative',
        },
        {
          selector: '.header .link',
          color: 'blue',
        },
      ],
      included: [],
    }

    expect(header).toEqual(output)
  })

  it('should nest multiple elements in line', function() {
    const link = jsStyle()
      .selector('.link')
      .color('blue')
      .use()

    const cell = jsStyle()
      .selector('.cell')
      .backgroundColor('#ffffff')
      .color('#000000')
      .position('relative')
      .nest(link)
      .use()

    const table = jsStyle()
      .selector('.table')
      .backgroundColor('red')
      .color('#3e3e3e')
      .position('absolute')
      .nest(cell)
      .use()

    const header = jsStyle()
      .selector('.header')
      .backgroundColor('blue')
      .nest(table)
      .use()

    const output = {
      body: {
        selector: '.header',
        'background-color': 'blue',
      },
      nested: [
        {
          selector: '.header .table',
          'background-color': 'red',
          color: '#3e3e3e',
          position: 'absolute',
        },
        {
          selector: '.header .table .cell',
          'background-color': '#ffffff',
          color: '#000000',
          position: 'relative',
        },
        {
          selector: '.header .table .cell .link',
          color: 'blue',
        },
      ],
      included: [],
    }

    expect(header).toEqual(output)
  })
})
