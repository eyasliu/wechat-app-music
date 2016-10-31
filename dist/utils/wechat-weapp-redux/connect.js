'use strict';
(function(module,require){var exports=module.exports={};

var _shallowEqual = require('./shallowEqual.js');

var _shallowEqual2 = _interopRequireDefault(_shallowEqual);

var _warning = require('./warning.js');

var _warning2 = _interopRequireDefault(_warning);

var _wrapActionCreators = require('./wrapActionCreators.js');

var _wrapActionCreators2 = _interopRequireDefault(_wrapActionCreators);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var defaultMapStateToProps = function defaultMapStateToProps(state) {
  return {};
}; // eslint-disable-line no-unused-vars
var defaultMapDispatchToProps = function defaultMapDispatchToProps(dispatch) {
  return { dispatch: dispatch };
};

function connect(mapStateToProps, mapDispatchToProps) {
  var shouldSubscribe = Boolean(mapStateToProps);
  var mapState = mapStateToProps || defaultMapStateToProps;
  var app = getApp();

  var mapDispatch = void 0;
  if (typeof mapDispatchToProps === 'function') {
    mapDispatch = mapDispatchToProps;
  } else if (!mapDispatchToProps) {
    mapDispatch = defaultMapDispatchToProps;
  } else {
    mapDispatch = (0, _wrapActionCreators2.default)(mapDispatchToProps);
  }

  return function wrapWithConnect(pageComponent) {

    function handleChange(options) {
      if (!this.unsubscribe) {
        return;
      }

      var state = this.store.getState();
      var mappedState = mapState(state, options);
      if (!this.data || (0, _shallowEqual2.default)(this.data, mappedState)) {
        return;
      }
      this.setData(mappedState);
    }

    function onLoad(options) {
      this.store = app.store;
      if (!this.store) {
        (0, _warning2.default)("Store对象不存在!");
      }
      if (shouldSubscribe) {
        this.unsubscribe = this.store.subscribe(handleChange.bind(this, options));
        handleChange.apply(this);
      }
      // pageComponent.prototype.onLoad.call(options)
    }

    function onUnload() {
      typeof this.unsubscribe === 'function' && this.unsubscribe();
    }

    function injectMethod(fun, options) {
      return function () {
        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
          args[_key] = arguments[_key];
        }

        options.before && options.before.apply(this, args);
        var result = fun && fun.apply(this, args);
        options.after && options.after.apply(this, args);
        return result;
      };
    }
    var originMethod = {
      onLoad: pageComponent.prototype.onLoad,
      onUnload: pageComponent.prototype.onUnload
    };

    pageComponent.prototype.onLoad = injectMethod(pageComponent.prototype.onLoad, {
      before: function before(args) {
        onLoad.apply(this, args);
      }
    });
    pageComponent.prototype.onUnload = injectMethod(pageComponent.prototype.onUnload, {
      before: function before(args) {
        onUnload.apply(this, args);
      }
    });

    return pageComponent;
  };
}

module.exports = connect;
})(module,require);