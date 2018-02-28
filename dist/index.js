'use strict';

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var properties = require('./properties');
var webkitProperties = require('./webkitProperties');
var utils = require('./utils');
var fs = require('fs');

var jsStyle = function jsStyle() {
  var close = utils.close,
      removePrefix = utils.removePrefix,
      formatOutput = utils.formatOutput,
      formatNest = utils.formatNest,
      formatInclusion = utils.formatInclusion;

  var props = [properties, webkitProperties];

  var state = {
    body: {},
    nested: [],
    included: []
  };

  var prefixes = {
    extension: 'ext-',
    add: 'add-',
    inclusion: 'inc-'
  };

  var config = {
    space: {
      body: {
        key: '',
        prop: '  '
      },
      inclusion: {
        key: '  ',
        prop: '    '
      }
    }
  };

  props.forEach(function (prop) {
    Object.keys(prop).forEach(function (key) {
      jsStyle[key] = function (value) {
        state.body[prop[key]] = value;
        return this;
      };
    });
  });

  jsStyle.add = function (prop, value) {
    if ((typeof prop === 'undefined' ? 'undefined' : _typeof(prop)) === 'object') {
      Object.keys(prop).forEach(function (propName) {
        state.body['' + prefixes.add + propName] = prop[propName];
      });
    } else {
      state.body[prop] = value;
    }
    return this;
  };

  jsStyle.render = function () {
    var renderer = [];
    formatOutput(state.body, prefixes, renderer, config.space.body);
    state.included.forEach(function (inclusion) {
      formatOutput(inclusion.body, prefixes, renderer, config.space.inclusion);
      close(renderer, 'inclusion');
      inclusion.nested.forEach(function (nest) {
        formatOutput(nest, prefixes, renderer, config.space.inclusion);
        close(renderer, 'inclusion');
      });
    });
    close(renderer);
    state.nested.forEach(function (nest) {
      formatOutput(nest, prefixes, renderer, config.space.body);
      close(renderer);
    });
    // Temporarily remove console.log in favour of `.write()` method
    // renderer.forEach(line => console.log(line))
    return renderer;
  };

  jsStyle.extend = function (arr) {
    Object.keys(arr.body).slice(1).forEach(function (key) {
      // Add prefix to extended property name and assign it to state.body
      state.body['' + prefixes.extension + key] = arr.body[key];
    });
    return this;
  };

  jsStyle.include = function (obj) {
    if (Array.isArray(obj)) {
      obj.forEach(function (element) {
        state.included.push(element);
      });
    } else {
      state.included.push(obj);
    }
    return this;
  };

  jsStyle.nest = function (obj) {
    // Accept array of objects
    if (Array.isArray(obj)) {
      obj.forEach(function (element) {
        formatNest(element.body, state);
        element.nested.forEach(function (nest) {
          formatNest(nest, state);
        });
      });
    } else {
      formatNest(obj.body, state);
      obj.nested.forEach(function (nest) {
        formatNest(nest, state);
      });
    }
    return this;
  };

  jsStyle.use = function () {
    return state;
  };

  jsStyle.selector = function (selector) {
    state.body.selector = selector;
    return this;
  };

  jsStyle.write = function (data) {
    if (!Array.isArray(data)) data = [data];
    data.forEach(function (obj) {
      var output = obj.output;
      var input = obj.input;
      var formatOutput = output.indexOf('.css') === -1 ? output + '.css' : output;
      var formatInput = input.join('\n');

      fs.writeFile(formatOutput, formatInput, function (err) {
        if (err) {
          console.log('Failed to write file:', err);
        } else {
          console.log('File written to \'' + formatOutput + '\'.');
        }
      });
    });
  };

  return jsStyle;
};

module.exports = jsStyle;