'use strict';
(function(module,require){var exports=module.exports={};

var _promise = require('../npm/babel-runtime/core-js/promise.js');

var _promise2 = _interopRequireDefault(_promise);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var baseUrl = "http://tingapi.ting.baidu.com/v1/restserver/ting";

var apiMethod = {
	search: 'baidu.ting.search.catalogSug',
	detail: 'baidu.ting.song.play',
	lrc: 'baidu.ting.song.lry',
	recommand: 'baidu.ting.song.getRecommandSongList',
	download: 'baidu.ting.song.downWeb',
	list: 'baidu.ting.billboard.billList'
};

var query = function query(option) {
	return {
		formate: 'json'
	};
};

var hackImg = function hackImg(url) {
	return 'http://www.beihaiw.com/pic.php?url=' + url;
};

var request = function request(data) {
	return new _promise2.default(function (resolve, reject) {
		wx.request({
			url: baseUrl,
			data: data,
			success: function success(res) {
				resolve(res.data);
			},
			fail: function fail(err) {
				reject(err);
			}
		});
	});
};

var search = function search(keyword) {
	return request({
		method: apiMethod['search'],
		query: keyword
	});
};

// type = 1-新歌榜,2-热歌榜,11-摇滚榜,12-爵士,16-流行,21-欧美金曲榜,22-经典老歌榜,23-情歌对唱榜,24-影视金曲榜,25-网络歌曲榜
var getOnline = function getOnline(type, paged) {
	var limit = 12;
	return request({
		method: apiMethod['list'],
		type: type,
		offset: limit * (paged - 1),
		size: limit
	}).then(function (data) {
		data.billboard.pic_s210 = hackImg(data.billboard.pic_s210);
		data.billboard.pic_s260 = hackImg(data.billboard.pic_s260);
		data.billboard.pic_s444 = hackImg(data.billboard.pic_s444);
		data.billboard.pic_s640 = hackImg(data.billboard.pic_s640);
		data.song_list.forEach(function (item) {
			item.pic_big = hackImg(item.pic_big);
			item.pic_small = hackImg(item.pic_small);
		});
		return data;
	});
};

var getDetail = function getDetail(id) {
	return request({
		method: apiMethod['detail'],
		songid: id
	});
};

module.exports = {
	getOnline: getOnline,
	getDetail: getDetail,
	search: search,
	request: request,
	apiMethod: apiMethod
};
})(module,require);