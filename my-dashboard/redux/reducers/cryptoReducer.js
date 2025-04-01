import {
    FETCH_CRYPTO_REQUEST,
    FETCH_CRYPTO_SUCCESS,
    FETCH_CRYPTO_FAILURE,
  } from '../actions/cryptoActions';
  
  const initialState = {
    loading: false,
    cryptoData: [],
    error: '',
  };
  
  const cryptoReducer = (state = initialState, action) => {
    switch (action.type) {
      case FETCH_CRYPTO_REQUEST:
        return { ...state, loading: true };
      case FETCH_CRYPTO_SUCCESS:
        return { ...state, loading: false, cryptoData: action.payload };
      case FETCH_CRYPTO_FAILURE:
        return { ...state, loading: false, error: action.payload };
      default:
        return state;
    }
  };
  
  export default cryptoReducer;
  