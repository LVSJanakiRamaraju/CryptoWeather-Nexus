
import {
    FETCH_NEWS_REQUEST,
    FETCH_NEWS_SUCCESS,
    FETCH_NEWS_FAILURE,
  } from '../actions/newsActions';
  
  const initialState = {
    loading: false,
    newsData: [],
    error: '',
  };
  
  const newsReducer = (state = initialState, action) => {
    switch (action.type) {
      case FETCH_NEWS_REQUEST:
        return { ...state, loading: true };
      case FETCH_NEWS_SUCCESS:
        return { ...state, loading: false, newsData: action.payload };
      case FETCH_NEWS_FAILURE:
        return { ...state, loading: false, error: action.payload };
      default:
        return state;
    }
  };
  
  export default newsReducer;
  