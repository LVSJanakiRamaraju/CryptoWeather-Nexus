
import axios from 'axios';


export const FETCH_CRYPTO_REQUEST = 'FETCH_CRYPTO_REQUEST';
export const FETCH_CRYPTO_SUCCESS = 'FETCH_CRYPTO_SUCCESS';
export const FETCH_CRYPTO_FAILURE = 'FETCH_CRYPTO_FAILURE';

export const fetchCryptoRequest = () => ({
  type: FETCH_CRYPTO_REQUEST,
});

export const fetchCryptoSuccess = (cryptoData) => ({
  type: FETCH_CRYPTO_SUCCESS,
  payload: cryptoData,
});

export const fetchCryptoFailure = (error) => ({
  type: FETCH_CRYPTO_FAILURE,
  payload: error,
});

export const fetchCryptoData = () => async (dispatch) => {
  dispatch(fetchCryptoRequest());
  try {
    const response = await axios.get('/api/crypto');
    dispatch(fetchCryptoSuccess(response.data));
  } catch (error) {
    dispatch(fetchCryptoFailure(error.message));
  }
};
