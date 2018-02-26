const utils = require('../src/utils')

describe('close', function() {
  it('should return semicolon and newline by default', function() {
    let renderer
    const rendererAfter = ['}', '']

    renderer = utils.close()
    expect(renderer).toEqual(rendererAfter)
  })

  it('should return semicolon and newline by default', function() {
    let renderer
    const rendererAfter = ['}', '']

    renderer = utils.close('extension')
    expect(renderer).toEqual(rendererAfter)
  })

  it('should add indent in inclusion', function() {
    let renderer
    const rendererAfter = ['  }', '']


    renderer = utils.close('inclusion', '  ')
    expect(renderer).toEqual(rendererAfter)
  })
})

describe('removePrefixes', function() {
  it('should remove all prefixes', function() {
    const key = 'inc-ext-color'
    const prefixes = {
      extension: 'ext-',
      add: 'add-',
      inclusion: 'inc-',
    }
    const newKey = utils.removePrefixes(key, prefixes)
    expect(newKey).toEqual('color')
  })

  it('should not mutate key', function() {
    const key = 'inc-ext-color'
    const prefixes = {
      extension: 'ext-',
      add: 'add-',
      inclusion: 'inc-',
    }
    const newKey = utils.removePrefixes(key, prefixes)
    expect(key).toEqual('inc-ext-color')
  })
})

describe('formatOutput', function() {
  it('should format body correctly', function() {
    const input = {
      selector: 'div',
      'ext-color': 'red',
      width: '100%',
    }
    const prefixes = {
      extension: 'ext-',
      add: 'add-',
      inclusion: 'inc-',
    }
    let renderer
    const space = {
      key: '',
      prop: '  ',
    }

    const output = ['div {', '  color: red;', '  width: 100%;', '}', '']
    renderer = utils.formatOutput(input, prefixes, space)
    expect(renderer).toEqual(output)
  })

  it('should format inclusion correctly', function() {
    const input = {
      selector: 'div',
    }
    const included = [
      {
        body: {
          selector: '.table',
          'background-color': 'red',
          width: '50%',
        },
        nested: [],
      },
    ]
    const prefixes = {
      extension: 'ext-',
      add: 'add-',
      inclusion: 'inc-',
    }
    let renderer
    const spaceBody = {
      key: '',
      prop: '  ',
    }
    const spaceInclusion = {
      key: '  ',
      prop: '    ',
    }

    const output = ['div {', '  .table {', '    background-color: red;', '    width: 50%;', '  }', '', '}', '']
    renderer = utils.formatOutput(input, prefixes, spaceBody, included, spaceInclusion)
    expect(renderer).toEqual(output)
  })
})

describe('formatNest', function() {
  it('should format correctly', function() {
    const input = {
      selector: 'div',
      color: 'red',
      width: '100%',
    }
    const state = {
      body: {
        selector: '.table',
        color: 'blue',
      },
    }

    const output = {
      selector: '.table div',
      color: 'red',
      width: '100%',
    }

    expect(utils.formatNest(input, state)).toEqual(output)
  })
})
