import {combineReducers} from 'redux';
import createReducer from 'redux-create-reducer-curry'

const initState = {
  playing: {
  	file: {},
  	item: {},
  	isPlaying: false,
  },
  search: {
  	list: []
  },
  rank: {
  	items: [
  		{
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
			}
		],
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
}

const tab = createReducer(initState.tab)({
	TAB_ACTIVE: (state, action) => [...state.map(item => {
		item.active = item.type === action.active
		return item;
	})]
})

const rank = createReducer(initState.rank)({
	RANK_UPDATE: (state, action) => ({
		...state, 
		...action.data
	}),
	LIST_UPDATE: (state, action) => {
		console.log(state, action)
		return ({
		...state,
		songlist: [...action.list]
	})},
	LIST_APPEND: (state, action) => ({
		...state, 
		songlist: [
			...state.songlist,
			...action.data.songlist
		]
	}),
	RANK_BOARD_UPDATE: (state, action) => ({
		...state,
		board: {...action.board}
	})
})

const search = createReducer(initState.search)({
	SEARCH: (state, action) => ({
		...state,
		list: action.songlist
	})
})

const playing = createReducer(initState.playing)({
	UPDATE_PLAY: (state, action) => {
		const newState = {
			...state,
			...action
		}
		wx.setStorage({key: 'playing', data: newState})
		return newState;
	}
})

export default combineReducers({
	rank,
	tab,
	search,
	playing
})