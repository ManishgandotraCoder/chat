import { configureStore } from '@reduxjs/toolkit'
import { combineReducers } from 'redux';
import userReducers from '../reducers/user-reducers';
import createSagaMiddleware from 'redux-saga';

const reducer = combineReducers({
  user: userReducers
})

const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
  reducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(sagaMiddleware),
});

export default store;