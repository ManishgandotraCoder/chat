import { configureStore } from '@reduxjs/toolkit'
import { combineReducers } from 'redux';
// import cryptoReducers from '../reducers/crypto.reducers';
import createSagaMiddleware from 'redux-saga';

const reducer = combineReducers({
//   crypto: cryptoReducers
})

const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
  reducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(sagaMiddleware),
});

export default store;