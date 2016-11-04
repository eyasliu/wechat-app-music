import api from './utils/api.js';

export async function getRankList(type, paged){
	// return api.getOnline(type, paged).then(data => ({
	// 	type: paged > 1 ? 'LIST_APPEND' : 'RANK_UPDATE',
	// 	payload: {
	// 		board: data.billboard,
	// 		list: data.song_list
	// 	}
	// }))
	const {song_list: songlist, billboard: board} = await api.getOnline(type, paged)
	return {
		type: paged > 1 ? 'LIST_APPEND' : 'RANK_UPDATE',
		data: {board, songlist}
	}
}

export async function searchList(keyword){
	const {song: songlist} =  await api.search(keyword)
  return {
  	type: 'SEARCH',
  	songlist
  }
}

export function playing(data){
	return {
		type: "UPDATE_PLAY",
		...data
	}
}