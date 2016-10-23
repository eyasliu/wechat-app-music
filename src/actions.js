import api from './utils/api.js';

export function getRankList(type, paged){
	return api.getOnline(type, paged).then(data => ({
		type: 'RANK_UPDATE',
		payload: {
			board: data.billboard,
			list: data.song_list
		}
	}))
}

export function searchList(keyword){
	return api.search(keyword).then(data => ({
    type: 'SEARCH',
    list: data.song
  }))
}