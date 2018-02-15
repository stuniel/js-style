'use strict';

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var properties = require('./properties');
var webkitProperties = require('./webkitProperties');
var utils = require('./utils');

var jsStyle = function jsStyle() {
  var removePrefix = utils.removePrefix,
      formatOutput = utils.formatOutput,
      formatNest = utils.formatNest;

  var props = [properties, webkitProperties];

  var state = {
    body: {},
    nested: []
  };

  var prefixes = {
    extension: 'ext-',
    add: 'add-'
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
    formatOutput(state.body, prefixes);
    state.nested.forEach(function (nest) {
      formatOutput(nest, prefixes);
    });
    return state;
  };

  jsStyle.extend = function (arr) {
    Object.keys(arr.body).slice(1).forEach(function (key) {
      // Add prefix to extended property name and assign it to state.body
      state.body['' + prefixes.extension + key] = arr.body[key];
    });
    return this;
  };

  jsStyle.nest = function (arr) {
    formatNest(arr.body, state);
    arr.nested.forEach(function (nest) {
      formatNest(nest, state);
    });
    return this;
  };

  jsStyle.use = function () {
    return state;
  };

  jsStyle.selector = function (selector) {
    state.body.selector = selector;
    return this;
  };

  return jsStyle;
};

module.exports = jsStyle;