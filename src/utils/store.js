import {createStore, applyMiddleware, compose} from 'redux'
import thunk from 'redux-thunk'
import reduxPromise from 'redux-promise'
import logger from 'redux-logger'

const middlewares = [
	reduxPromise,
	thunk,
	logger(),
]
export default function createStoreWithMiddleware(...args){
	return applyMiddleware(
		...middlewares
	)(createStore)(...args)
}