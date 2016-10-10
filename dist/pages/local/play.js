'use strict';
var exports=module.exports={};
try{

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _regenerator = require('../../npm/babel-runtime/regenerator/index.js');

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = require('../../npm/babel-runtime/helpers/asyncToGenerator.js');

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _getPrototypeOf = require('../../npm/babel-runtime/core-js/object/get-prototype-of.js');

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = require('../../npm/babel-runtime/helpers/classCallCheck.js');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('../../npm/babel-runtime/helpers/createClass.js');

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require('../../npm/babel-runtime/helpers/possibleConstructorReturn.js');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('../../npm/babel-runtime/helpers/inherits.js');

var _inherits3 = _interopRequireDefault(_inherits2);

var _labrador = require('../../npm/labrador/index.js');

var _labrador2 = _interopRequireDefault(_labrador);

var _api = require('../../utils/api.js');

var _api2 = _interopRequireDefault(_api);

var _util = require('../../utils/util.js');

var _util2 = _interopRequireDefault(_util);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Play = function (_wx$Component) {
	(0, _inherits3.default)(Play, _wx$Component);

	function Play() {
		var _ref;

		var _temp, _this, _ret;

		(0, _classCallCheck3.default)(this, Play);

		for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
			args[_key] = arguments[_key];
		}

		return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = Play.__proto__ || (0, _getPrototypeOf2.default)(Play)).call.apply(_ref, [this].concat(args))), _this), _this.data = {
			file: {},
			item: {},
			isPlaying: false
		}, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
	}

	(0, _createClass3.default)(Play, [{
		key: 'onLoad',
		value: function () {
			var _ref2 = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee(option) {
				var data, _res, res;

				return _regenerator2.default.wrap(function _callee$(_context) {
					while (1) {
						switch (_context.prev = _context.next) {
							case 0:
								if (!option.songid) {
									_context.next = 9;
									break;
								}

								_context.next = 3;
								return _util2.default.playSong(option.songid);

							case 3:
								data = _context.sent;

								this.setData({
									isPlaying: true,
									data: data
								});
								_context.next = 7;
								return _labrador2.default.setStorage({ key: 'playing', data: data });

							case 7:
								_context.next = 13;
								break;

							case 9:
								_context.next = 11;
								return _labrador2.default.getStorage({ key: 'playing' });

							case 11:
								_res = _context.sent;

								this.setData(_res.data);

							case 13:
								_context.next = 15;
								return _labrador2.default.getStorage({ key: 'isPlaying' });

							case 15:
								res = _context.sent;

								this.setData({
									isPlaying: res.data
								});

							case 17:
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
		key: 'playToggle',
		value: function () {
			var _ref3 = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee2(e) {
				return _regenerator2.default.wrap(function _callee2$(_context2) {
					while (1) {
						switch (_context2.prev = _context2.next) {
							case 0:
								if (!this.data.isPlaying) {
									_context2.next = 5;
									break;
								}

								_labrador2.default.stopBackgroundAudio();
								this.setData({
									isPlaying: false
								});
								_context2.next = 8;
								break;

							case 5:
								_context2.next = 7;
								return _util2.default.playSong(this.data.item.song_id);

							case 7:
								this.setData({
									isPlaying: true
								});

							case 8:
							case 'end':
								return _context2.stop();
						}
					}
				}, _callee2, this);
			}));

			function playToggle(_x2) {
				return _ref3.apply(this, arguments);
			}

			return playToggle;
		}()
	}]);
	return Play;
}(_labrador2.default.Component);

exports.default = Play;
{
var __page=new exports.default();
__page.init();
Page(__page);
}
}catch(error){console.error(error.stack);throw error;}