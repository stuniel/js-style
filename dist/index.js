'use strict';

var properties = require('./properties');
var utils = require('./utils');

var jsStyle = function jsStyle() {

  var state = {
    body: {},
    nested: []
  };

  var prefixes = {
    extension: 'ext-'
  };

  var removePrefix = utils.removePrefix,
      formatOutput = utils.formatOutput,
      formatNest = utils.formatNest;

  var props = properties;
  Object.keys(props).forEach(function (key) {
    jsStyle[key] = props[key];
  });

  jsStyle.convert = function (propName, value) {
    state.body[propName] = value;
  };

  jsStyle.selector = function (selector) {
    state.body.selector = selector;
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

  jsStyle.use = function () {
    return state;
  };

  return jsStyle;
};

module.exports = jsStyle;