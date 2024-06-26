/*! Extenso.js v1.0.1 | MIT (c) 2015-2024 by Matheus Alves */
(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["extenso"] = factory();
	else
		root["extenso"] = factory();
})(typeof self !== 'undefined' ? self : this, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module) {

module.exports = JSON.parse("{\"BRL\":{\"singular\":\"real\",\"plural\":\"reais\",\"subunit\":{\"singular\":\"centavo\",\"plural\":\"centavos\"}},\"ECV\":{\"singular\":\"escudo\",\"plural\":\"escudos\",\"subunit\":{\"singular\":\"cêntimo\",\"plural\":\"cêntimos\"}},\"EUR\":{\"singular\":\"euro\",\"plural\":\"euros\",\"subunit\":{\"singular\":\"cêntimo\",\"plural\":\"cêntimos\"}},\"MZN\":{\"singular\":\"metical\",\"plural\":\"meticais\",\"subunit\":{\"singular\":\"centavos\",\"plural\":\"centavos\"}}}");

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/*!
 * assign-deep <https://github.com/jonschlinkert/assign-deep>
 *
 * Copyright (c) 2017-present, Jon Schlinkert.
 * Released under the MIT License.
 */



function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
var toString = Object.prototype.toString;
var assignSymbols = __webpack_require__(4);
var isValidKey = function isValidKey(key) {
  return key !== '__proto__' && key !== 'constructor' && key !== 'prototype';
};
var assign = module.exports = function (target) {
  var i = 0;
  for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    args[_key - 1] = arguments[_key];
  }
  if (isPrimitive(target)) target = args[i++];
  if (!target) target = {};
  for (; i < args.length; i++) {
    if (isObject(args[i])) {
      for (var _i = 0, _Object$keys = Object.keys(args[i]); _i < _Object$keys.length; _i++) {
        var key = _Object$keys[_i];
        if (isValidKey(key)) {
          if (isObject(target[key]) && isObject(args[i][key])) {
            assign(target[key], args[i][key]);
          } else {
            target[key] = args[i][key];
          }
        }
      }
      assignSymbols(target, args[i]);
    }
  }
  return target;
};
function isObject(val) {
  return typeof val === 'function' || toString.call(val) === '[object Object]';
}
function isPrimitive(val) {
  return _typeof(val) === 'object' ? val === null : typeof val !== 'function';
}

/***/ }),
/* 2 */
/***/ (function(module, exports) {

module.exports = formatter;
module.exports["default"] = formatter;
function formatter(options) {
  options = options || {};

  // *********************************************************************************************
  // Set defaults for negatives
  // options.negative, options.negativeOut, options.separator retained for backward compatibility
  // *********************************************************************************************

  // type of negative; default left
  options.negativeType = options.negativeType || (options.negative === 'R' ? 'right' : 'left');

  // negative symbols '-' or '()'
  if (typeof options.negativeLeftSymbol !== 'string') {
    switch (options.negativeType) {
      case 'left':
        options.negativeLeftSymbol = '-';
        break;
      case 'brackets':
        options.negativeLeftSymbol = '(';
        break;
      default:
        options.negativeLeftSymbol = '';
    }
  }
  if (typeof options.negativeRightSymbol !== 'string') {
    switch (options.negativeType) {
      case 'right':
        options.negativeRightSymbol = '-';
        break;
      case 'brackets':
        options.negativeRightSymbol = ')';
        break;
      default:
        options.negativeRightSymbol = '';
    }
  }

  // whether negative symbol should be inside/outside prefix and suffix

  if (typeof options.negativeLeftOut !== "boolean") {
    options.negativeLeftOut = options.negativeOut === false ? false : true;
  }
  if (typeof options.negativeRightOut !== "boolean") {
    options.negativeRightOut = options.negativeOut === false ? false : true;
  }

  //prefix and suffix
  options.prefix = options.prefix || '';
  options.suffix = options.suffix || '';

  //separators
  if (typeof options.integerSeparator !== 'string') {
    options.integerSeparator = typeof options.separator === 'string' ? options.separator : ',';
  }
  options.decimalsSeparator = typeof options.decimalsSeparator === 'string' ? options.decimalsSeparator : '';
  options.decimal = options.decimal || '.';

  //padders
  options.padLeft = options.padLeft || -1; //default no padding
  options.padRight = options.padRight || -1; //default no padding

  function format(number, overrideOptions) {
    overrideOptions = overrideOptions || {};
    if (number || number === 0) {
      number = '' + number; //convert number to string if it isn't already
    } else {
      return '';
    }

    //identify a negative number and make it absolute
    var output = [];
    var negative = number.charAt(0) === '-';
    number = number.replace(/^\-/g, '');

    //Prepare output with left hand negative and/or prefix
    if (!options.negativeLeftOut && !overrideOptions.noUnits) {
      output.push(options.prefix);
    }
    if (negative) {
      output.push(options.negativeLeftSymbol);
    }
    if (options.negativeLeftOut && !overrideOptions.noUnits) {
      output.push(options.prefix);
    }

    //Format core number
    number = number.split('.');
    if (options.round != null) round(number, options.round);
    if (options.truncate != null) number[1] = truncate(number[1], options.truncate);
    if (options.padLeft > 0) number[0] = padLeft(number[0], options.padLeft);
    if (options.padRight > 0) number[1] = padRight(number[1], options.padRight);
    if (!overrideOptions.noSeparator && number[1]) number[1] = addDecimalSeparators(number[1], options.decimalsSeparator);
    if (!overrideOptions.noSeparator && number[0]) number[0] = addIntegerSeparators(number[0], options.integerSeparator);
    output.push(number[0]);
    if (number[1]) {
      output.push(options.decimal);
      output.push(number[1]);
    }

    //Prepare output with right hand negative and/or prefix
    if (options.negativeRightOut && !overrideOptions.noUnits) {
      output.push(options.suffix);
    }
    if (negative) {
      output.push(options.negativeRightSymbol);
    }
    if (!options.negativeRightOut && !overrideOptions.noUnits) {
      output.push(options.suffix);
    }

    //join output and return
    return output.join('');
  }
  format.negative = options.negative;
  format.negativeOut = options.negativeOut;
  format.negativeType = options.negativeType;
  format.negativeLeftOut = options.negativeLeftOut;
  format.negativeLeftSymbol = options.negativeLeftSymbol;
  format.negativeRightOut = options.negativeRightOut;
  format.negativeRightSymbol = options.negativeRightSymbol;
  format.prefix = options.prefix;
  format.suffix = options.suffix;
  format.separate = options.separate;
  format.integerSeparator = options.integerSeparator;
  format.decimalsSeparator = options.decimalsSeparator;
  format.decimal = options.decimal;
  format.padLeft = options.padLeft;
  format.padRight = options.padRight;
  format.truncate = options.truncate;
  format.round = options.round;
  function unformat(number, allowedSeparators) {
    allowedSeparators = allowedSeparators || [];
    if (options.allowedSeparators) {
      options.allowedSeparators.forEach(function (s) {
        allowedSeparators.push(s);
      });
    }
    allowedSeparators.push(options.integerSeparator);
    allowedSeparators.push(options.decimalsSeparator);
    number = number.replace(options.prefix, '');
    number = number.replace(options.suffix, '');
    var newNumber = number;
    do {
      number = newNumber;
      for (var i = 0; i < allowedSeparators.length; i++) {
        newNumber = newNumber.replace(allowedSeparators[i], '');
      }
    } while (newNumber != number);
    return number;
  }
  format.unformat = unformat;
  function validate(number, allowedSeparators) {
    number = unformat(number, allowedSeparators);
    number = number.split(options.decimal);
    if (number.length > 2) {
      return false;
    } else if (options.truncate != null && number[1] && number[1].length > options.truncate) {
      return false;
    } else if (options.round != null && number[1] && number[1].length > options.round) {
      return false;
    } else {
      return /^-?\d+\.?\d*$/.test(number);
    }
  }
  return format;
}

//where x is already the integer part of the number
function addIntegerSeparators(x, separator) {
  x += '';
  if (!separator) return x;
  var rgx = /(\d+)(\d{3})/;
  while (rgx.test(x)) {
    x = x.replace(rgx, '$1' + separator + '$2');
  }
  return x;
}

//where x is already the decimal part of the number
function addDecimalSeparators(x, separator) {
  x += '';
  if (!separator) return x;
  var rgx = /(\d{3})(\d+)/;
  while (rgx.test(x)) {
    x = x.replace(rgx, '$1' + separator + '$2');
  }
  return x;
}

//where x is the integer part of the number
function padLeft(x, padding) {
  x = x + '';
  var buf = [];
  while (buf.length + x.length < padding) {
    buf.push('0');
  }
  return buf.join('') + x;
}

//where x is the decimals part of the number
function padRight(x, padding) {
  if (x) {
    x += '';
  } else {
    x = '';
  }
  var buf = [];
  while (buf.length + x.length < padding) {
    buf.push('0');
  }
  return x + buf.join('');
}
function truncate(x, length) {
  if (x) {
    x += '';
  }
  if (x && x.length > length) {
    return x.substr(0, length);
  } else {
    return x;
  }
}

//where number is an array with 0th item as integer string and 1st item as decimal string (no negatives)
function round(number, places) {
  if (number[1] && places >= 0 && number[1].length > places) {
    //truncate to correct number of decimal places
    var decim = number[1].slice(0, places);
    //if next digit was >= 5 we need to round up
    if (+number[1].substr(places, 1) >= 5) {
      //But first count leading zeros as converting to a number will loose them
      var leadingzeros = "";
      while (decim.charAt(0) === "0") {
        leadingzeros = leadingzeros + "0";
        decim = decim.substr(1);
      }
      //Then we can change decim to a number and add 1 before replacing leading zeros
      decim = +decim + 1 + '';
      decim = leadingzeros + decim;
      if (decim.length > places) {
        //adding one has made it longer
        number[0] = +number[0] + +decim.charAt(0) + ''; //add value of firstchar to the integer part
        decim = decim.substring(1); //ignore the 1st char at the beginning which is the carry to the integer part
      }
    }

    number[1] = decim;
  }
  return number;
}

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(5)["default"];

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/*!
 * assign-symbols <https://github.com/jonschlinkert/assign-symbols>
 *
 * Copyright (c) 2015-present, Jon Schlinkert.
 * Licensed under the MIT License.
 */



function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
var toString = Object.prototype.toString;
var isEnumerable = Object.prototype.propertyIsEnumerable;
var getSymbols = Object.getOwnPropertySymbols;
module.exports = function (target) {
  if (!isObject(target)) {
    throw new TypeError('expected the first argument to be an object');
  }
  for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    args[_key - 1] = arguments[_key];
  }
  if (args.length === 0 || typeof Symbol !== 'function' || typeof getSymbols !== 'function') {
    return target;
  }
  for (var _i = 0, _args = args; _i < _args.length; _i++) {
    var arg = _args[_i];
    var names = getSymbols(arg);
    var _iterator = _createForOfIteratorHelper(names),
      _step;
    try {
      for (_iterator.s(); !(_step = _iterator.n()).done;) {
        var key = _step.value;
        if (isEnumerable.call(arg, key)) {
          target[key] = arg[key];
        }
      }
    } catch (err) {
      _iterator.e(err);
    } finally {
      _iterator.f();
    }
  }
  return target;
};
function isObject(val) {
  return typeof val === 'function' || toString.call(val) === '[object Object]' || Array.isArray(val);
}

/***/ }),
/* 5 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, "isValidOpt", function() { return /* binding */ isValidOpt; });
__webpack_require__.d(__webpack_exports__, "toNegative", function() { return /* binding */ toNegative; });

// EXTERNAL MODULE: ./node_modules/assign-deep/index.js
var assign_deep = __webpack_require__(1);
var assign_deep_default = /*#__PURE__*/__webpack_require__.n(assign_deep);

// CONCATENATED MODULE: ./src/num-util.js
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
/**
 * Verificar se um valor é um número, da língua portuguesa, valido.
 *
 * @method isValidNumber
 * @param {string|float} val Um valor para ser verificado.
 * @returns {boolean} Verificação do valor.
 */
var isValidNumber = function isValidNumber(val) {
  var decimalSeparatorIsDot = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
  if (typeof val === 'number') {
    // Se for um inteiro e não for seguro
    if (Number.isInteger(val) && !Number.isSafeInteger(val)) {
      return false;
    }

    // Se for um float
    if (!Number.isInteger(val)) {
      return true;
    }
  }

  /*
   * Geral
   */

  // "1000000", "-2000", etc.
  var isNotFormatted = /^-?\d+$/.test(val);

  /*
   * Decimal separado por ',' (vírgula)
   */

  // "1.000.000", "-2.000", etc.
  var isFormattedDot = /^-?\d{1,3}\d?((\.\d{3})+)?$/.test(val);
  // "1.000.000,42", "-2.000,00", etc.
  var isFormattedDecimalDot = /^-?\d{1,3}\d?((\.\d{3})+)?,\d+$/.test(val);
  // "1000000,42", "-2000,00", etc.
  var isNotFormattetDecimalDot = /^-?\d+,\d+$/.test(val);

  /*
   * Decimal separado por '.' (ponto)
   */

  // "1,000,000", "-2,000", etc.
  var isFormattedComma = /^-?\d{1,3}\d?((,\d{3})+)?$/.test(val);
  // "1,000,000.42", "-2,000.00", etc.
  var isFormattedDecimalComma = /^-?\d{1,3}\d?((,\d{3})+)?\.\d+$/.test(val);
  // "1000000.42", "-2000.00", etc.
  var isNotFormattetDecimalComma = /^-?\d+\.\d+$/.test(val);
  if (decimalSeparatorIsDot) {
    return isNotFormatted || isFormattedComma || isFormattedDecimalComma || isNotFormattetDecimalComma;
  }
  return isNotFormatted || isFormattedDot || isFormattedDecimalDot || isNotFormattetDecimalDot;
};

/**
 * Analisar um número.
 *
 * @method parseNumber
 * @param {string} val Um número para ser analisado
 * @returns {object} Objeto com as informações do número
 */
var parseNumber = function parseNumber(num) {
  var decimalSeparatorIsDot = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
  if (typeof num === 'number') {
    num = num.toString();
    decimalSeparatorIsDot = true;
  }
  var separator = decimalSeparatorIsDot ? ',' : '.';
  var decimalSeparator = decimalSeparatorIsDot ? '.' : ',';
  var isNegative = /^-/.test(num);
  var normalized = num.replace(RegExp("(-|\\".concat(separator, ")"), 'g'), '');
  if (normalized.includes(decimalSeparator)) {
    var _normalized$split$map = normalized.split(decimalSeparator).map(function (val) {
        return val.replace(/^0+$/, '0');
      }),
      _normalized$split$map2 = _slicedToArray(_normalized$split$map, 2),
      integer = _normalized$split$map2[0],
      decimal = _normalized$split$map2[1];
    return {
      isNegative: isNegative,
      integer: integer,
      decimal: decimal
    };
  }
  return {
    isNegative: isNegative,
    integer: normalized,
    decimal: '0'
  };
};
// EXTERNAL MODULE: ./src/write-currency/currencies.json
var currencies = __webpack_require__(0);

// CONCATENATED MODULE: ./src/get-list.js
/**
 * Obter lista de números menores que dez.
 *
 * @method listLt10
 * @param {string} locale Código do país que deve ser escrito.
 * @returns {Array} Lista das partes do número.
 */
var listLt10 = function listLt10(locale) {
  return ['zero', 'um', 'dois', 'três', 'quatro', 'cinco', 'seis', 'sete', 'oito', 'nove'];
};

/**
 * Obter lista de números menores que cem.
 *
 * @method listLt100
 * @param {string} locale Código do país que deve ser escrito.
 * @returns {Array} Lista das partes do número.
 */
var listLt100 = function listLt100(locale) {
  return ['dez', 'onze', 'doze', 'treze', {
    br: 'quatorze',
    pt: 'catorze'
  }[locale], 'quinze', {
    br: 'dezesseis',
    pt: 'dezasseis'
  }[locale], {
    br: 'dezessete',
    pt: 'dezassete'
  }[locale], 'dezoito', {
    br: 'dezenove',
    pt: 'dezanove'
  }[locale], 'vinte', 'trinta', 'quarenta', 'cinquenta', 'sessenta', 'setenta', 'oitenta', 'noventa'];
};

/**
 * Obter lista de números menores que mil.
 *
 * @method listLt1000
 * @param {string} locale Código do país que deve ser escrito.
 * @returns {Array} Lista das partes do número.
 */
var listLt1000 = function listLt1000(locale) {
  return ['cento', 'duzentos', 'trezentos', 'quatrocentos', 'quinhentos', 'seiscentos', 'setecentos', 'oitocentos', 'novecentos'];
};

/**
 * Obter lista de números maiores que mil.
 *
 * @method listGt1000
 * @param {string} locale Código do país que deve ser escrito.
 * @returns {Array} Lista das partes do número.
 */
var listGt1000 = function listGt1000(locale) {
  var scale = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'short';
  var baseList = ['mil', 'milhões',
  // Sem o sufixo, pois ele será dinâmico
  'bil', 'tril', 'quatril', 'quintil', 'sextil', 'septil', 'octil', 'nonil', 'decil', 'undecil', 'duodecil'];
  return baseList.map(function (value, index) {
    // Resolve sufixo entre 'br' e 'pt'
    if (index < 2) return value;
    var suffixes = {
      'br': 'hões',
      'pt': 'iões'
    };
    return value + suffixes[locale];
  }).map(function (value, index, array) {
    // Resolve escala entre longa e curta
    if (scale === 'long') {
      if (index < 2) return value;
      if (index % 2 == 0) return 'mil ' + array[index / 2];
      return array[index / 2 + .5];
    } else {
      return value;
    }
  });
};

/**
 * Obter lista de números decimais.
 *
 * @method listDecimals
 * @param {string} locale Código do país que deve ser escrito.
 * @returns {Array} Lista das partes do número.
 */
var listDecimals = function listDecimals(locale) {
  return ['milésimo', 'milionésimo', 'bilionésimo', 'trilionésimo', 'quatrilionésimo', 'quintilionésimo', 'sextilionésimo', 'septilionésimo', 'octilionésimo', 'nonilionésimo', 'decilionésimo', 'undecilionésimo', 'duodecilionésimo'];
};
// CONCATENATED MODULE: ./src/lt10.js


/**
 * Obter um número inteiro menor que dez por extenso.
 *
 * @function lt10
 * @param {number} int Um número inteiro menor que dez.
 * @param {string} locale Código do país para escrever o número.
 * @returns {string} O número por extenso.
 */
/* harmony default export */ var lt10 = (function (_int, locale) {
  return listLt10(locale)[_int];
});
// CONCATENATED MODULE: ./src/lt100.js



/**
 * Obter um número inteiro menor que cem por extenso.
 *
 * @function lt100
 * @param {number} int Um número inteiro menor que cem.
 * @param {string} locale Código do país para escrever o número.
 * @returns {string} O número escrito por extenso.
 */
/* harmony default export */ var lt100 = (function (_int, locale) {
  if (_int < 10) return lt10(_int, locale);
  if (_int < 20) return listLt100(locale)[_int - 10];
  var unit = lt10(_int % 10, locale);
  var ten = listLt100(locale)[(_int - _int % 10) / 10 + 8];
  return unit !== 'zero' ? "".concat(ten, " e ").concat(unit) : ten;
});
// CONCATENATED MODULE: ./src/lt1000.js



/**
 * Obter um número inteiro menor que mil por extenso.
 *
 * @function lt1000
 * @param {number} int Um número inteiro menor que mil.
 * @param {string} locale Código do país para escrever o número.
 * @returns {string} Número escrito por extenso.
 */
/* harmony default export */ var lt1000 = (function (_int, locale) {
  if (_int < 100) return lt100(_int, locale);
  if (_int === 100) return 'cem';
  var hundredInt = _int - _int % 100;
  var restInt = _int % 100;
  var hundred = listLt1000(locale)[hundredInt / 100 - 1];
  var rest = lt100(restInt, locale);
  return restInt ? "".concat(hundred, " e ").concat(rest) : hundred;
});
// EXTERNAL MODULE: ./node_modules/format-number/index.js
var format_number = __webpack_require__(2);
var format_number_default = /*#__PURE__*/__webpack_require__.n(format_number);

// CONCATENATED MODULE: ./src/gt1000/int-util.js


/**
 * Separar um inteiro em uma array com base na formatação de um número.
 *
 * @method split
 * @param {string} int Número inteiro.
 * @returns {Array} Array com as partes do número.
 */
var int_util_split = function split(_int) {
  var format = format_number_default()();
  var formatted = format(_int);
  var splitted = formatted.split(',');
  return splitted;
};

/**
 * Obter a última parte de um número.
 *
 * @method getLastNumber
 * @param {string} int Número inteiro.
 * @returns {number} Última parte do número.
 */
var getLastNumber = function getLastNumber(_int2) {
  var splitted = int_util_split(_int2);
  var last = splitted[splitted.length - 1];
  var integer = parseInt(last);
  return integer;
};
// CONCATENATED MODULE: ./node_modules/@arr/reverse/module.js
/* harmony default export */ var reverse_module = (function (arr) {
  if (arr == null) {
    return [];
  }
  var i = 0,
    len = arr.length,
    j = len - 1;
  var k,
    tmp,
    mid = len / 2 | 0; // same as Math.floor

  for (; i < mid; i++) {
    tmp = arr[i];
    k = j - i;
    arr[i] = arr[k];
    arr[k] = tmp;
  }
  return arr;
});
// CONCATENATED MODULE: ./src/gt1000/parts-util.js





/**
 * Adicionar vírgula entre algumas partes.
 *
 * @method addComma
 * @param {Array} parts Array com as partes.
 * @returns {Array} Partes com a vírgula caso tenho sido necessário.
 */
var addComma = function addComma(parts) {
  return parts.map(function (part, index, array) {
    // REGRA: Não adiciona entre a penúltima e a última parte.
    return index < array.length - 2 ? "".concat(part, ",") : part;
  });
};

/**
 * Adicionar conjunção "e" em determinadas partes.
 *
 * @method addConjunction
 * @param {Array} parts Partes do número que está sendo processado.
 * @param {string} int Número inteiro que está sendo processado.
 * @returns {Array} Partes com a conjução "e" caso tenha sido necessário.
 */
var parts_util_addConjunction = function addConjunction(parts, _int) {
  var lastNum = getLastNumber(_int);

  // A parte é valida apenas se:
  // - Caso 1: A parte é um inteiro menor que cem.
  // - Caso 2: A parte é um inteiro divisível por cem.
  if (lastNum < 100 || lastNum % 100 === 0) {
    return parts.map(function (part, index, array) {
      return index === array.length - 2 ? "".concat(part, " e") : part;
    });
  }
  return parts;
};

/**
 * Limpar partes que não são lidas no número.
 *
 * @method clear
 * @param {Array} parts Partes do número que está sendo processado.
 * @returns {Array} Partes com algumas partes removidas.
 */
var clear = function clear(parts) {
  // Etapas para a remoção:
  // - Etapa 1: Remove zeros à esquerda.
  // - Etapa 2: Remove partes que não são lidas.
  // - Etapa 3: Remove o "1" das partes com "1 mil".
  return parts.map(function (part) {
    return part.replace(/^0+\s?/, '');
  }).filter(function (part) {
    return /^\d/.test(part);
  }).map(function (part) {
    return part.replace(/^1\s(mil)$/, '$1');
  });
};

/**
 * Escrever por extenso os números inteiros dentro das partes.
 *
 * @method name
 * @param {Array} parts Partes do número que está sendo processado.
 * @param {string} locale Código do país para escrever o número.
 * @returns {Array} Partes com os inteiros escritos por extenso.
 */
var parts_util_name = function name(parts, locale, scale) {
  return reverse_module(reverse_module(parts).map(function (part, i) {
    var numberName = listGt1000(locale, scale)[i - 1];
    return numberName ? "".concat(part, " ").concat(numberName) : part;
  }));
};

/**
 * Singularizar partes do número que são maiores que um.
 *
 * @method singularize
 * @param {Array} parts Partes do número que está sendo processado.
 * @returns {string} Número com as partes singularizadas.
 */
var singularize = function singularize(parts) {
  var regex = /^(1\s.*)ões/;
  var replacer = function replacer(str) {
    return str.replace(regex, '$1ão');
  };
  return parts.map(replacer);
};

/**
 * Deve escrever os inteiros restantes em uma array com as partes.
 *
 * @method write
 * @param {Array} parts Partes do número que está sendo processado.
 * @param {string} locale Código do país para escrever o número.
 * @returns {string} Número como todas as partes escritas por extenso.
 */
var parts_util_write = function write(parts, locale) {
  return parts.map(function (part) {
    return part.replace(/^(\d+)/, function (digit) {
      var _int2 = parseInt(digit);
      return lt1000(_int2, locale);
    });
  });
};
// CONCATENATED MODULE: ./src/gt1000/index.js



/**
 * Escrever números maiores que mil.
 *
 * @function gt1000
 * @param {string} int Número inteiro maior que mil.
 * @param {string} locale Código do país para escrever o número.
 * @returns {number} Valor escrito por extenso.
 */
/* harmony default export */ var gt1000 = (function (_int, locale, scale) {
  var number = parts_util_write(addComma(parts_util_addConjunction(singularize(clear(parts_util_name(int_util_split(_int), locale, scale))), _int)), locale);
  return number.join(' ');
});
// CONCATENATED MODULE: ./src/write-int.js



/**
 * Passar para o feminino alguns números.
 *
 * @method toFemale
 * @param {string} num Um número qualquer.
 * @returns {string} O número com algumas partes no feminino.
 * @example
 * toFemale('quarenta e dois')
 * // 'quarenta e duas'
 */
var toFemale = function toFemale(num) {
  return num.replace(/\bum\b/, 'uma').replace(/\bdois\b/, 'duas');
};

/**
 * Obter qualquer número escrito por extenso.
 *
 * @method writeInt
 * @param {string} int Um número para ser escrito.
 * @param {string} locale Código do país para escrever o número.
 * @param {string} [gender='m'] A opção do gênero do número.
 * @returns {string} O número escrito.
 */
/* harmony default export */ var write_int = (function (_int, locale) {
  var gender = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 'm';
  var scale = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 'short';
  var intNum = parseInt(_int);
  var num;
  if (intNum < 1000) num = lt1000(intNum, locale);
  if (intNum === 1000) num = 'mil';
  if (intNum > 1000) num = gt1000(_int, locale, scale);
  return gender === 'f' ? toFemale(num) : num;
});
// CONCATENATED MODULE: ./src/write-currency/write.js


/**
 * Obter o valor escrito por extenso.
 *
 * @method write
 * @param {string} val O valor a ser escrito.
 * @param {string} locale Código do país para escrever o número.
 * @param {object} opts As opções de escrita do valor.
 * @returns {string} O valor escrito por extenso.
 */
/* harmony default export */ var write_currency_write = (function (val, locale, opts, scale) {
  var number = parseInt(val);
  var text = write_int(val, locale, 'm', scale);
  if (number === 1) return "".concat(text, " ").concat(opts.singular);
  if (number >= 1e+6) {
    var numStr = number.toString();
    var hundreds = Number(numStr.substr(-6, 3));
    var dozens = Number(numStr.substr(-3, 3));
    if (hundreds === 0 && dozens === 0) {
      return "".concat(text, " de ").concat(opts.plural);
    }
  }
  return "".concat(text, " ").concat(opts.plural);
});
// CONCATENATED MODULE: ./src/write-currency/write-subunit.js


/**
 * Obter a sub-unidade escrita por extenso.
 *
 * @method writeSubunit
 * @param {string} val Valor a ser escrito.
 * @param {string} locale Código do país para escrever o número.
 * @param {object} opts Opções de escrita do valor.
 * @returns {string} Valor escrito por extenso.
 */
/* harmony default export */ var write_subunit = (function (val, locale, opts) {
  var textNumber = write_int(val, locale);
  return parseInt(val) === 1 ? "".concat(textNumber, " ").concat(opts.subunit.singular) : "".concat(textNumber, " ").concat(opts.subunit.plural);
});
// CONCATENATED MODULE: ./src/write-currency/index.js




/**
 * Obter lista dos códigos ISO de um registro de moedas.
 *
 * @method getIsos
 * @param {object} currencies Objeto com registro de moedas.
 * @returns {Array} Lista com os códigos ISO.
 */
var getIsos = function getIsos(currencies) {
  return Object.keys(currencies);
};

/**
 * Verificar se há um código ISO registrado.
 *
 * @method isValidIso
 * @param {string} iso Código ISO para ser verificado.
 * @param {object} currencies Objeto com registro de moedas.
 * @returns {boolean} Informação da existência do registro.
 */
var isValidIso = function isValidIso(iso, currencies) {
  return getIsos(currencies).includes(iso);
};

/**
 * Verificar se um número, envolvido em string, é igual a zero.
 *
 * @method isZero
 * @param {string} val Número envolvido numa string.
 * @returns {boolean} Informação do valor.
 * @example
 * isZero('00') // true
 * isZero('42') // false
 */
var isZero = function isZero(val) {
  return /^0+$/.test(val);
};

/**
 * Obter um valor monetário escrito por extenso.
 *
 * @method writeCurrency
 * @param {string} iso Código ISO da moeda que deverá ser usada.
 * @param {string} locale Código do país para escrever o número.
 * @param {string} [unit='0'] Valor da moeda (parte inteira).
 * @param {string} [subunit='0'] Sub-unidade do valor (parte "decimal").
 * @returns {string} Valor escrito por extenso.
 */
/* harmony default export */ var write_currency = (function (iso, locale) {
  var unit = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : '0';
  var subunit = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : '0';
  var scale = arguments.length > 4 ? arguments[4] : undefined;
  if (!isValidIso(iso, currencies)) {
    throw new Error('Invalid ISO code');
  }
  if (subunit.length === 1) {
    subunit = subunit + '0';
  }
  var opts = currencies[iso];
  var unitText = write_currency_write(unit, locale, opts, scale);
  var subunitText = write_subunit(subunit, locale, opts);
  if (isZero(unit)) return subunitText;
  if (isZero(subunit)) return unitText;
  if (isZero(unit) && isZero(subunit)) return "zero ".concat(opts.plural);
  return "".concat(unitText, " e ").concat(subunitText);
});
// CONCATENATED MODULE: ./src/write-decimal/util.js
/**
 * Obter a informação do tipo da casa decimal (décimo ou centésimo).
 *
 * @method getType
 * @param {number} place O número de casas do valor decimal.
 * @returns {string} Informação do tipo da casa.
 */
var getType = function getType(place) {
  switch (place % 3) {
    case 1:
      return 'décimo';
      break;
    case 2:
      return 'centésimo';
      break;
  }
};
// CONCATENATED MODULE: ./src/write-decimal/index.js




/**
 * Adicionar 's' nos finais de determinadas palavras - pluralizar.
 *
 * @method pluralize
 * @param {string} val Um substantivo.
 * @param {number} count A quantidade de objeto.
 * @returns {string} Palavra pluralizada.
 */
var pluralize = function pluralize(val, count) {
  return count > 1 ? "".concat(val, "s") : val;
};

/**
 * Escrever formalmente a parte decimal de um número.
 *
 * @method writeDecimalFormal
 * @param {string} int Um número inteiro referente ao decimal.
 * @param {string} locale Código do país para escrever o número.
 * @returns {string} A parte decimal escrita por extenso.
 */
var write_decimal_writeDecimalFormal = function writeDecimalFormal(_int, locale) {
  // Veja <https://bit.ly/2SrsXVO> (no <archive.org>) para entender tudo.

  var len = _int.length;
  var intNum = parseInt(_int);
  var intNormalized = _int.replace(/^0+/, '');
  var intText = write_int(intNormalized, locale);
  var intType = pluralize(getType(len), intNum);
  var intTypeOf = listDecimals(locale)[Math.floor(len / 3 - 1)];
  if (len < 3) return "".concat(intText, " ").concat(intType);
  if (len % 3 === 0) return "".concat(intText, " ").concat(pluralize(intTypeOf, intNum));
  return "".concat(intText, " ").concat(intType, " de ").concat(intTypeOf);
};

/**
 * Escrever informalmente a parte decimal de um número.
 *
 * @method writeDecimalInformal
 * @param {string} int Um número inteiro referente ao decimal.
 * @param {string} locale Código do país para escrever o número.
 * @returns {string} A parte decimal escrita por extenso.
 */
var write_decimal_writeDecimalInformal = function writeDecimalInformal(_int2, locale) {
  return "v\xEDrgula ".concat(write_int(_int2, locale));
};

/**
 * Escrever a parte decimal de um número por extenso.
 *
 * @method writeDecimal
 * @param {string} int Um número inteiro referente ao decimal.
 * @param {string} locale Código do país para escrever o número.
 * @param {string} opt Opção informando se é 'formal' ou 'informal'.
 * @returns {string} A parte decimal escrita por extenso.
 */
/* harmony default export */ var write_decimal = (function (_int3, locale, opt) {
  return opt && opt === 'informal' ? write_decimal_writeDecimalInformal(_int3, locale) : write_decimal_writeDecimalFormal(_int3, locale);
});
// CONCATENATED MODULE: ./src/write-all.js






/**
 * Verificar se uma opção é válida.
 *
 * @method isValidOpt
 * @param {string} val Valor da opção.
 * @param {Array} vals Valores para checagem.
 * @returns {boolean} Informação da validade da opção.
 */
var isValidOpt = function isValidOpt(val, vals) {
  return vals.includes(val);
};

/**
 * Passar um número escrito por extenso para o modo negativo.
 *
 * @method toNegative
 * @param {string} num Valor escrito por extenso.
 * @param {string} [mode='formal'] Opção sobre o modo a ser escrito.
 * @returns {string} Valor como negativo.
 */
var toNegative = function toNegative(num) {
  var mode = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'formal';
  return mode === 'informal' ? "menos ".concat(num) : "".concat(num, " negativo");
};

/**
 * Escrever números por extenso.
 *
 * @param {string|number} num Número para ser escrito por extenso.
 * @param {object} opts Opções para configurar modo de escrita.
 * @returns {string} Número escrito por extenso.
 */
/* harmony default export */ var write_all = __webpack_exports__["default"] = (function (num, opts) {
  if (typeof num !== 'string' && typeof num !== 'number') {
    throw new TypeError('Must be a string or a number');
  }
  var defaultOpts = {
    mode: 'number',
    locale: 'br',
    negative: 'formal',
    scale: 'short',
    currency: {
      type: 'BRL'
    },
    number: {
      gender: 'm',
      decimal: 'formal',
      decimalSeparator: 'comma'
    }
  };

  // Usando o pacote 'assign-deep' no lugar de Object.assign(),
  // pois esse último substitui completamente todas as propriedades
  // de um objeto que está dentro de outro objeto.
  opts = assign_deep_default()(defaultOpts, opts);
  if (!isValidOpt(opts.mode, ['number', 'currency']) || !isValidOpt(opts.locale, ['pt', 'br']) || !isValidOpt(opts.negative, ['formal', 'informal']) || !isValidOpt(opts.scale, ['short', 'long']) || !isValidOpt(opts.currency.type, ['BRL', 'EUR', 'ECV']) || !isValidOpt(opts.number.gender, ['m', 'f']) || !isValidOpt(opts.number.decimal, ['formal', 'informal']) || !isValidOpt(opts.number.decimalSeparator, ['comma', 'dot'])) {
    throw new Error('Invalid option');
  }
  var decimalSeparatorIsDot = opts.number.decimalSeparator === 'dot';
  if (!isValidNumber(num, decimalSeparatorIsDot)) {
    throw new Error('Invalid number');
  }
  var _parseNumber = parseNumber(num, decimalSeparatorIsDot),
    isNegative = _parseNumber.isNegative,
    integer = _parseNumber.integer,
    decimal = _parseNumber.decimal;
  if (opts.mode === 'currency') {
    var iso = opts.currency.type;
    var locale = opts.locale;
    var numText = write_currency(iso, locale, integer, decimal, opts.scale);
    return isNegative ? toNegative(numText, opts.negative) : numText;
  }
  if (opts.mode === 'number') {
    var intNameSingular = opts.number.gender === 'f' ? 'inteira' : 'inteiro';
    var intName = parseInt(integer) === 1 ? intNameSingular : "".concat(intNameSingular, "s");
    var intText = write_int(integer, opts.locale, opts.number.gender, opts.scale);
    var decText = write_decimal(decimal, opts.locale, opts.number.decimal);
    if (integer === '0' && decimal === '0') {
      return intText;
    }

    // Se tem a parte inteira e não tem a parte decimal
    if (integer !== '0' && decimal === '0') {
      return isNegative ? toNegative(intText, opts.negative) : intText;
    }

    // Se não tem a parte inteira e tem a parte decimal
    if (integer === '0' && decimal !== '0') {
      var number = opts.number.decimal === 'informal' ? "zero ".concat(decText) : decText;
      return isNegative ? toNegative(number, opts.negative) : number;
    }

    // Se tem a parte inteira e a parte decimal
    if (integer !== '0' && decimal !== '0') {
      if (opts.number.decimal === 'informal') {
        return "".concat(intText, " ").concat(decText);
      }
      var _numText = "".concat(intText, " ").concat(intName, " e ").concat(decText);
      return isNegative ? toNegative(_numText, opts.negative) : _numText;
    }
  }
});

/***/ })
/******/ ]);
});