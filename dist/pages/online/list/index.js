'use strict';
(function(module,require){var exports=module.exports={};

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends2 = require('../../../npm/babel-runtime/helpers/extends.js');

var _extends3 = _interopRequireDefault(_extends2);

var _regenerator = require('../../../npm/babel-runtime/regenerator/index.js');

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = require('../../../npm/babel-runtime/helpers/asyncToGenerator.js');

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _getPrototypeOf = require('../../../npm/babel-runtime/core-js/object/get-prototype-of.js');

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = require('../../../npm/babel-runtime/helpers/classCallCheck.js');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('../../../npm/babel-runtime/helpers/createClass.js');

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require('../../../npm/babel-runtime/helpers/possibleConstructorReturn.js');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('../../../npm/babel-runtime/helpers/inherits.js');

var _inherits3 = _interopRequireDefault(_inherits2);

var _labrador = require('../../../npm/labrador/index.js');

var _labrador2 = _interopRequireDefault(_labrador);

var _actions = require('../../../actions.js');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var List = function (_wx$Component) {
  (0, _inherits3.default)(List, _wx$Component);

  function List() {
    var _ref;

    var _temp, _this, _ret;

    (0, _classCallCheck3.default)(this, List);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = List.__proto__ || (0, _getPrototypeOf2.default)(List)).call.apply(_ref, [this].concat(args))), _this), _this.app = getApp(), _this.data = {
      paged: 1,
      loading: false
    }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
  }

  (0, _createClass3.default)(List, [{
    key: 'onReady',
    value: function onReady() {
      _labrador2.default.setNavigationBarTitle({ title: "在线音乐" });
    }
  }, {
    key: 'loading',
    value: function loading(text) {
      this.setData({ loading: text });
    }
  }, {
    key: 'onLoad',
    value: function () {
      var _ref2 = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee(option) {
        var data;
        return _regenerator2.default.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                this.loading(true);
                _context.next = 3;
                return _labrador2.default.app.dispatch((0, _actions.getRankList)(option.type, 1));

              case 3:
                data = _context.sent;


                this.setData({
                  type: option.type,
                  paged: 1,
                  loading: false
                });

              case 5:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function onLoad(_x) {
        return _ref2.apply(this, arguments);
      }

      return onLoad;
    }()
  }, {
    key: 'nextpage',
    value: function () {
      var _ref3 = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee2(e) {
        var paged;
        return _regenerator2.default.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                paged = this.data.paged + 1;

                this.loading(true);
                _context2.next = 4;
                return _labrador2.default.app.dispatch((0, _actions.getRankList)(this.data.type, paged));

              case 4:
                this.setData({
                  paged: paged,
                  loading: false
                });

              case 5:
              case 'end':
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));

      function nextpage(_x2) {
        return _ref3.apply(this, arguments);
      }

      return nextpage;
    }()
  }]);
  return List;
}(_labrador2.default.Component);

exports.default = _labrador2.default.app.connect(function (state) {
  return (0, _extends3.default)({}, state.rank, {
    tab: state.tab
  });
})(List);
Page(_labrador._createPage(exports.default));

})(module,require);