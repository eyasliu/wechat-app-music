'use strict';
(function(module,require){var exports=module.exports={};

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.searchList = exports.getRankList = undefined;

var _extends2 = require('./npm/babel-runtime/helpers/extends.js');

var _extends3 = _interopRequireDefault(_extends2);

var _regenerator = require('./npm/babel-runtime/regenerator/index.js');

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = require('./npm/babel-runtime/helpers/asyncToGenerator.js');

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var getRankList = exports.getRankList = function () {
	var _ref = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee(type, paged) {
		var _ref2, songlist, board;

		return _regenerator2.default.wrap(function _callee$(_context) {
			while (1) {
				switch (_context.prev = _context.next) {
					case 0:
						_context.next = 2;
						return _api2.default.getOnline(type, paged);

					case 2:
						_ref2 = _context.sent;
						songlist = _ref2.song_list;
						board = _ref2.billboard;
						return _context.abrupt('return', {
							type: paged > 1 ? 'LIST_APPEND' : 'RANK_UPDATE',
							data: { board: board, songlist: songlist }
						});

					case 6:
					case 'end':
						return _context.stop();
				}
			}
		}, _callee, this);
	}));

	return function getRankList(_x, _x2) {
		return _ref.apply(this, arguments);
	};
}();

var searchList = exports.searchList = function () {
	var _ref3 = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee2(keyword) {
		var _ref4, songlist;

		return _regenerator2.default.wrap(function _callee2$(_context2) {
			while (1) {
				switch (_context2.prev = _context2.next) {
					case 0:
						_context2.next = 2;
						return _api2.default.search(keyword);

					case 2:
						_ref4 = _context2.sent;
						songlist = _ref4.song;
						return _context2.abrupt('return', {
							type: 'SEARCH',
							songlist: songlist
						});

					case 5:
					case 'end':
						return _context2.stop();
				}
			}
		}, _callee2, this);
	}));

	return function searchList(_x3) {
		return _ref3.apply(this, arguments);
	};
}();

exports.playing = playing;

var _api = require('./utils/api.js');

var _api2 = _interopRequireDefault(_api);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function playing(data) {
	return (0, _extends3.default)({
		type: "UPDATE_PLAY"
	}, data);
}
})(module,require);