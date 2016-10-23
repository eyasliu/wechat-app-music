import {combineReducers} from 'redux';
import createReducer from 'redux-create-reducer-curry'

const initState = {
  playing: {},
  data: {
    ranks: [{
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
    list: [],
    tab: [{
      label: '排行榜',
      type: 'rank',
      url: '/pages/online/index',
      active: true
    }, {
      label: '搜索',
      type: 'search',
      url: '/pages/online/search/index'
    }]
  }
}

const ranks = createReducer(initState.data.ranks)({
	SET_RANKS: (state, action) => action.ranks
})
const list = createReducer(initState.data.list)({})
const tab = createReducer(initState.data.tab)({})

export default combineReducers({
	ranks, list, tab
})