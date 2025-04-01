
import {
    FETCH_WEATHER_REQUEST,
    FETCH_WEATHER_SUCCESS,
    FETCH_WEATHER_FAILURE,
  } from '../actions/weatherActions';
  
  const initialState = {
    loading: false,
    weatherData: [],
    error: '',
  };
  
  const weatherReducer = (state = initialState, action) => {
    switch (action.type) {
      case FETCH_WEATHER_REQUEST:
        return { ...state, loading: true };
      case FETCH_WEATHER_SUCCESS:
        return { ...state, loading: false, weatherData: action.payload };
      case FETCH_WEATHER_FAILURE:
        return { ...state, loading: false, error: action.payload };
      default:
        return state;
    }
  };
  
  export default weatherReducer;
  