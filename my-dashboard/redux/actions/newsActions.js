
import axios from 'axios';


export const FETCH_NEWS_REQUEST = 'FETCH_NEWS_REQUEST';
export const FETCH_NEWS_SUCCESS = 'FETCH_NEWS_SUCCESS';
export const FETCH_NEWS_FAILURE = 'FETCH_NEWS_FAILURE';

export const fetchNewsRequest = () => ({
  type: FETCH_NEWS_REQUEST,
});

export const fetchNewsSuccess = (newsData) => ({
  type: FETCH_NEWS_SUCCESS,
  payload: newsData,
});

export const fetchNewsFailure = (error) => ({
  type: FETCH_NEWS_FAILURE,
  payload: error,
});


export const fetchNewsData = () => async (dispatch) => {
  dispatch(fetchNewsRequest());
  try {
    const response = await axios.get('/api/news');
    dispatch(fetchNewsSuccess(response.data.articles));
  } catch (error) {
    dispatch(fetchNewsFailure(error.message));
  }
};
