'use strict';
(function(module,require){var exports=module.exports={};

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _extends2 = require('./npm/babel-runtime/helpers/extends.js');

var _extends3 = _interopRequireDefault(_extends2);

var _toConsumableArray2 = require('./npm/babel-runtime/helpers/toConsumableArray.js');

var _toConsumableArray3 = _interopRequireDefault(_toConsumableArray2);

var _redux = require('./npm/redux/lib/index.js');

var _reduxCreateReducerCurry = require('./npm/redux-create-reducer-curry/lib/index.js');

var _reduxCreateReducerCurry2 = _interopRequireDefault(_reduxCreateReducerCurry);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var initState = {
	playing: {
		file: {},
		item: {},
		isPlaying: false
	},
	search: {
		list: []
	},
	rank: {
		items: [{
			text: '新歌榜',
			type: 1
		}, {
			text: '热歌榜',
			type: 2
		}, {
			text: "摇滚榜",
			type: 11
		}, {
			text: "爵士",
			type: 12
		}, {
			text: "流行",
			type: 16
		}, {
			text: "欧美金曲榜",
			type: 21
		}, {
			text: "经典老歌榜",
			type: 22
		}, {
			text: "情歌对唱榜",
			type: 23
		}, {
			text: "影视金曲榜",
			type: 24
		}, {
			text: "网络歌曲榜",
			type: 25
		}],
		type: '',
		board: {},
		songlist: []
	},
	tab: [{
		label: '排行榜',
		type: 'rank',
		url: '/pages/online/index/index',
		active: true
	}, {
		label: '搜索',
		type: 'search',
		url: '/pages/online/search/index',
		active: false
	}]
};

var tab = (0, _reduxCreateReducerCurry2.default)(initState.tab)({
	TAB_ACTIVE: function TAB_ACTIVE(state, action) {
		return [].concat((0, _toConsumableArray3.default)(state.map(function (item) {
			item.active = item.type === action.active;
			return item;
		})));
	}
});

var rank = (0, _reduxCreateReducerCurry2.default)(initState.rank)({
	RANK_UPDATE: function RANK_UPDATE(state, action) {
		return (0, _extends3.default)({}, state, action.data);
	},
	LIST_UPDATE: function LIST_UPDATE(state, action) {
		console.log(state, action);
		return (0, _extends3.default)({}, state, {
			songlist: [].concat((0, _toConsumableArray3.default)(action.list))
		});
	},
	LIST_APPEND: function LIST_APPEND(state, action) {
		return (0, _extends3.default)({}, state, {
			songlist: [].concat((0, _toConsumableArray3.default)(state.songlist), (0, _toConsumableArray3.default)(action.data.songlist))
		});
	},
	RANK_BOARD_UPDATE: function RANK_BOARD_UPDATE(state, action) {
		return (0, _extends3.default)({}, state, {
			board: (0, _extends3.default)({}, action.board)
		});
	}
});

var search = (0, _reduxCreateReducerCurry2.default)(initState.search)({
	SEARCH: function SEARCH(state, action) {
		return (0, _extends3.default)({}, state, {
			list: action.songlist
		});
	}
});

var playing = (0, _reduxCreateReducerCurry2.default)(initState.playing)({
	UPDATE_PLAY: function UPDATE_PLAY(state, action) {
		var newState = (0, _extends3.default)({}, state, action);
		wx.setStorage({ key: 'playing', data: newState });
		return newState;
	}
});

exports.default = (0, _redux.combineReducers)({
	rank: rank,
	tab: tab,
	search: search,
	playing: playing
});
})(module,require);