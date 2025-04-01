// redux/store.js
import { createStore, combineReducers, applyMiddleware } from 'redux';
import {thunk} from 'redux-thunk';
import weatherReducer from './reducers/weatherReducer';
import cryptoReducer from './reducers/cryptoReducer';
import newsReducer from './reducers/newsReducer';

// Combine all reducers
const rootReducer = combineReducers({
  weather: weatherReducer,
  crypto: cryptoReducer,
  news: newsReducer,
});

// Create Redux store with Thunk middleware
const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;
