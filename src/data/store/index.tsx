import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk';

import indexReducer from '../reducer'


const createStoreWithMiddleware = applyMiddleware(thunk)(createStore)

const store = createStoreWithMiddleware(indexReducer)

export default store;