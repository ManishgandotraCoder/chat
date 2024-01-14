import { configureStore } from '@reduxjs/toolkit'
import { combineReducers } from 'redux';
import userReducers from '../reducers/user-reducers';
import createSagaMiddleware from 'redux-saga';
import groupReducers from '../reducers/group-reducers';
import chatReducers from '../reducers/chat-reducers';

const reducer = combineReducers({
  user: userReducers,
  group: groupReducers,
  message :chatReducers
})

const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
  reducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(sagaMiddleware),
});

export default store;