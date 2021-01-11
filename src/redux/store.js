import { createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import { persistStore } from 'redux-persist';
import rootReducer from './root-reducer';

const middlewares = [];
// middleware работает только в режиме development
if (process.env.NODE_ENV === 'development') middlewares.push(logger); 

export const store = createStore(rootReducer, applyMiddleware(...middlewares));
export const persistor = persistStore(store);
