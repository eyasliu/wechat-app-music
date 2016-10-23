'use strict';
(function(module,require){var exports=module.exports={};

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _assign = require('../../../npm/babel-runtime/core-js/object/assign.js');

var _assign2 = _interopRequireDefault(_assign);

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

//index.js
//获取应用实例
var Search = function (_wx$Component) {
  (0, _inherits3.default)(Search, _wx$Component);

  function Search() {
    var _ref;

    var _temp, _this, _ret;

    (0, _classCallCheck3.default)(this, Search);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = Search.__proto__ || (0, _getPrototypeOf2.default)(Search)).call.apply(_ref, [this].concat(args))), _this), _this.app = getApp(), _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
  }

  (0, _createClass3.default)(Search, [{
    key: 'showToast',
    value: function showToast(text) {
      var _this2 = this;

      var type = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'success';

      this.setData({
        toast: {
          text: text, type: type
        }
      });
      setTimeout(function () {
        _this2.setData({
          toast: ''
        });
      }, 3000);
    }
  }, {
    key: 'inputing',
    value: function inputing(e) {
      this.setData({
        search: (0, _assign2.default)(this.data.search, { value: e.detail.value })
      });
    }
  }, {
    key: 'bindSearch',
    value: function bindSearch(e) {
      var keyword = this.data.search.value;
      if (!keyword) {
        this.showToast('请输入关键字', 'warn');
        return;
      }
      _labrador2.default.app.dispatch((0, _actions.searchList)(keyword));
    }
  }, {
    key: 'onReady',
    value: function onReady() {
      _labrador2.default.setNavigationBarTitle({ title: "在线搜索" });
      _labrador2.default.app.dispatch({
        type: 'TAB_ACTIVE',
        active: 'search'
      });
    }
  }]);
  return Search;
}(_labrador2.default.Component);

exports.default = _labrador2.default.app.connect(function (state) {
  return {
    list: state.search.list,
    tab: state.tab,
    search: {
      value: ""
    },
    isEnd: false
  };
})(Search);
Page(_labrador._createPage(exports.default));

})(module,require);