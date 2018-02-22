'use strict';

var utils = {

  close: function close(renderer, type) {
    switch (type) {
      case 'inclusion':
        renderer.push('  }');
        break;
      default:
        renderer.push('}');
    }
    renderer.push('');
  },

  removePrefixes: function removePrefixes(key, prefixes) {
    var newKey = key;
    var prefixesList = Object.keys(prefixes).map(function (prefix) {
      return prefixes[prefix];
    });

    prefixesList.forEach(function (prefix) {
      if (key.indexOf(prefix) !== -1) {
        newKey = key.slice(prefix.length);
      }
    });

    return prefixesList.some(function (prefix) {
      return newKey.indexOf(prefix) !== -1;
    }) ? this.removePrefixes(newKey, prefixes) : newKey;
  },

  formatInclusion: function formatInclusion(obj, prefixes, renderer) {
    Object.keys(obj).map(function (key) {
      switch (key) {
        case 'selector':
          return '  ' + obj[key] + ' {';
        default:
          // Check for all prefixes in prefixes object
          var newKey = utils.removePrefixes(key, prefixes);
          return '    ' + newKey + ': ' + obj[key] + ';';
      }
    }).forEach(function (key) {
      return renderer.push(key);
    });
  },

  formatOutput: function formatOutput(obj, prefixes, renderer) {
    Object.keys(obj).map(function (key) {
      switch (key) {
        case 'selector':
          return obj[key] + ' {';
        default:
          // Check for all prefixes in prefixes object
          var newKey = utils.removePrefixes(key, prefixes);
          return '  ' + newKey + ': ' + obj[key] + ';';
      }
    }).forEach(function (key) {
      return renderer.push(key);
    });
  },

  formatNest: function formatNest(obj, state) {
    // Create object copy to prevent mutating the original one
    var newObj = Object.assign({}, obj);
    Object.keys(obj).map(function (key) {
      return key === 'selector' ? newObj[key] = state.body[key] + ' ' + obj[key] : key;
    });
    state.nested.push(newObj);
  }

};

module.exports = utils;