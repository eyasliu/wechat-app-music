import {createStore, applyMiddleware, compose} from 'redux'
import thunk from 'redux-thunk'
import asyncAwait from 'redux-async-await'
import logger from 'redux-logger'

const middlewares = [
	asyncAwait,
	thunk,
	logger(),
]
export default function createStoreWithMiddleware(...args){
	return applyMiddleware(
		...middlewares
	)(createStore)(...args)
}