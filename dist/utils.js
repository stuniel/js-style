'use strict';

var utils = {

  removePrefix: function (_removePrefix) {
    function removePrefix(_x, _x2) {
      return _removePrefix.apply(this, arguments);
    }

    removePrefix.toString = function () {
      return _removePrefix.toString();
    };

    return removePrefix;
  }(function (key, prefix) {
    var newKey = key.indexOf(prefix) !== -1 ? key.slice(prefix.length) : key;
    // Check if there is a 'deeper' extension
    return newKey.indexOf(prefix) !== -1 ? removePrefix(newKey, prefix) : newKey;
  }),

  formatOutput: function formatOutput(obj, prefixes) {
    Object.keys(obj).map(function (key) {
      switch (key) {
        case 'selector':
          return obj[key] + ' {';
        default:
          var newKey = utils.removePrefix(key, prefixes.extension);
          return ' ' + newKey + ': ' + obj[key] + ';';
      }
    }).forEach(function (key) {
      return console.log(key);
    });
    // Add closing bracket and whitespace
    console.log('}');
    console.log('');
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