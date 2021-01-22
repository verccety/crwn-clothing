import { configureStore } from '@reduxjs/toolkit';

import logger from 'redux-logger';
import { persistStore } from 'redux-persist';
import rootReducer from './root-reducer';
import createSagaMiddleware from 'redux-saga';
import rootSaga from './root.saga';

const sagaMiddleware = createSagaMiddleware();

const middlewares = [sagaMiddleware];
// middleware (в данном случае logger) будет добавлен только development
if (process.env.NODE_ENV === 'development') middlewares.push(logger);

export const store = configureStore({
  reducer: rootReducer,
  middleware: [...middlewares],
});

sagaMiddleware.run(rootSaga);

export const persistor = persistStore(store);
