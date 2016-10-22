import {createStore, applyMiddleware, compose} from 'redux'
import thunk from 'redux-thunk'

const middlewares = [
	thunk
]
export default function createStoreWithMiddleware(...args){
	return applyMiddleware(
		...middlewares
	)(createStore)(...args)
}