'use strict';
(function(module,require){var exports=module.exports={};

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _extends2 = require('./npm/babel-runtime/helpers/extends.js');

var _extends3 = _interopRequireDefault(_extends2);

exports.getRankList = getRankList;
exports.searchList = searchList;
exports.playing = playing;

var _api = require('./utils/api.js');

var _api2 = _interopRequireDefault(_api);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function getRankList(type, paged) {
	return _api2.default.getOnline(type, paged).then(function (data) {
		return {
			type: 'RANK_UPDATE',
			payload: {
				board: data.billboard,
				list: data.song_list
			}
		};
	});
}

function searchList(keyword) {
	return _api2.default.search(keyword).then(function (data) {
		return {
			type: 'SEARCH',
			list: data.song
		};
	});
}

function playing(data) {
	return (0, _extends3.default)({
		type: "UPDATE_PLAY"
	}, data);
}
})(module,require);