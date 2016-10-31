'use strict';
(function(module,require){var exports=module.exports={};

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.printBuffer = printBuffer;

var _helpers = require('./helpers.js');

var _diff = require('./diff.js');

var _diff2 = _interopRequireDefault(_diff);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _typeof(obj) { return obj && typeof Symbol !== "undefined" && obj.constructor === Symbol ? "symbol" : typeof obj; }

/**
 * Get log level string based on supplied params
 *
 * @param {string | function | object} level - console[level]
 * @param {object} action - selected action
 * @param {array} payload - selected payload
 * @param {string} type - log entry type
 *
 * @returns {string} level
 */
function getLogLevel(level, action, payload, type) {
  switch (typeof level === 'undefined' ? 'undefined' : _typeof(level)) {
    case 'object':
      return typeof level[type] === 'function' ? level[type].apply(level, _toConsumableArray(payload)) : level[type];
    case 'function':
      return level(action);
    default:
      return level;
  }
}

function defaultTitleFormatter(options) {
  var timestamp = options.timestamp;
  var duration = options.duration;

  return function (action, time, took) {
    var parts = ['action'];
    if (timestamp) {
      parts.push('@ ' + time);
    }
    parts.push(action.type);
    if (duration) {
      parts.push('(in ' + took.toFixed(2) + ' ms)');
    }
    return parts.join(' ');
  };
}

function printBuffer(buffer, options) {
  var logger = options.logger;
  var actionTransformer = options.actionTransformer;
  var _options$titleFormatt = options.titleFormatter;
  var titleFormatter = _options$titleFormatt === undefined ? defaultTitleFormatter(options) : _options$titleFormatt;
  var collapsed = options.collapsed;
  var colors = options.colors;
  var level = options.level;
  var diff = options.diff;

  buffer.forEach(function (logEntry, key) {
    var started = logEntry.started;
    var startedTime = logEntry.startedTime;
    var action = logEntry.action;
    var prevState = logEntry.prevState;
    var error = logEntry.error;
    var took = logEntry.took;
    var nextState = logEntry.nextState;

    var nextEntry = buffer[key + 1];

    if (nextEntry) {
      nextState = nextEntry.prevState;
      took = nextEntry.started - started;
    }

    // Message
    var formattedAction = actionTransformer(action);
    var isCollapsed = typeof collapsed === 'function' ? collapsed(function () {
      return nextState;
    }, action) : collapsed;

    var formattedTime = (0, _helpers.formatTime)(startedTime);
    var titleCSS = colors.title ? 'color: ' + colors.title(formattedAction) + ';' : null;
    var title = titleFormatter(formattedAction, formattedTime, took);

    // Render
    try {
      if (isCollapsed) {
        if (colors.title) logger.groupCollapsed('%c ' + title, titleCSS);else logger.groupCollapsed(title);
      } else {
        if (colors.title) logger.group('%c ' + title, titleCSS);else logger.group(title);
      }
    } catch (e) {
      logger.log(title);
    }

    var prevStateLevel = getLogLevel(level, formattedAction, [prevState], 'prevState');
    var actionLevel = getLogLevel(level, formattedAction, [formattedAction], 'action');
    var errorLevel = getLogLevel(level, formattedAction, [error, prevState], 'error');
    var nextStateLevel = getLogLevel(level, formattedAction, [nextState], 'nextState');

    if (prevStateLevel) {
      if (colors.prevState) logger[prevStateLevel]('%c prev state', 'color: ' + colors.prevState(prevState) + '; font-weight: bold', prevState);else logger[prevStateLevel]('prev state', prevState);
    }

    if (actionLevel) {
      if (colors.action) logger[actionLevel]('%c action', 'color: ' + colors.action(formattedAction) + '; font-weight: bold', formattedAction);else logger[actionLevel]('action', formattedAction);
    }

    if (error && errorLevel) {
      if (colors.error) logger[errorLevel]('%c error', 'color: ' + colors.error(error, prevState) + '; font-weight: bold', error);else logger[errorLevel]('error', error);
    }

    if (nextStateLevel) {
      if (colors.nextState) logger[nextStateLevel]('%c next state', 'color: ' + colors.nextState(nextState) + '; font-weight: bold', nextState);else logger[nextStateLevel]('next state', nextState);
    }

    if (diff) {
      (0, _diff2.default)(prevState, nextState, logger, isCollapsed);
    }

    try {
      logger.groupEnd();
    } catch (e) {
      logger.log('—— log end ——');
    }
  });
}
})(module,require);