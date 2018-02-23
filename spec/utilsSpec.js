const utils = require('../src/utils')

describe('close', function() {
  it('should return semicolon and newline by default', function() {
    const renderer = []
    const rendererAfter = ['}', '']

    utils.close(renderer)
    expect(renderer).toEqual(rendererAfter)
  })

  it('should return semicolon and newline by default', function() {
    const renderer = []
    const rendererAfter = ['}', '']

    utils.close(renderer, 'extension')
    expect(renderer).toEqual(rendererAfter)
  })

  it('should add indent in inclusion', function() {
    const renderer = []
    const rendererAfter = ['  }', '']

    utils.close(renderer, 'inclusion')
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
    const renderer = []
    const space = {
      key: '',
      prop: '  ',
    }

    const output = ['div {', '  color: red;', '  width: 100%;']
    utils.formatOutput(input, prefixes, renderer, space)
    expect(renderer).toEqual(output)
  })

  it('should format inclusion correctly', function() {
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
    const renderer = []
    const space = {
      key: '  ',
      prop: '    ',
    }

    const output = ['  div {', '    color: red;', '    width: 100%;']
    utils.formatOutput(input, prefixes, renderer, space)
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
      nested: [],
    }

    const output = {
      selector: '.table div',
      color: 'red',
      width: '100%',
    }

    utils.formatNest(input, state)
    expect(state.nested[0]).toEqual(output)
  })
})
