import { createStore, combineReducers } from 'redux';
import { topReducer, topStateType } from './module/top';

export type AppState = {
  top: topStateType
};

const store = createStore(
  combineReducers<AppState>({
    top: topReducer
  })
);

export default store;