import axios from 'axios';

export const FETCH_CATEGORIES_SUCCESS = 'FETCH_CATEGORIES_SUCCESS';
export const FETCH_IMAGES_SUCCESS = 'FETCH_IMAGES_SUCCESS';
export const FETCH_IMAGES = 'FETCH_IMAGES';

const API_KEY =
  'live_vDXYCbvPVAeA6cGTXWdOXHCqLucK93QJpNhWojAHS7pXBjA1RDxFwx9TKtA4euT5';

export const fetchCategories = () => {
  return async (dispatch) => {
    try {
      const response = await axios.get(
        'https://api.thecatapi.com/v1/categories'
      );
      dispatch({
        type: FETCH_CATEGORIES_SUCCESS,
        payload: response.data,
      });
    } catch (error) {
      console.error('Error fetching categories:', error);
    }
  };
};

export const fetchImagesByCategory = (categoryId, limit = 10) => {
  return async (dispatch) => {
    try {
      const response = await axios.get(
        `https://api.thecatapi.com/v1/images/search?api_key=${API_KEY}&limit=${limit}&category_ids=${categoryId}`
      );
      console.log(response.data);
      dispatch({
        type: FETCH_IMAGES_SUCCESS,
        payload: response.data,
      });
    } catch (error) {
      console.error('Error fetching images:', error);
    }
  };
};

export const fetchImages = (limit = 10) => {
  return async (dispatch) => {
    try {
      const response = await axios.get(
        `https://api.thecatapi.com/v1/images/search?api_key=${API_KEY}&limit=${limit}`
      );
      dispatch({
        type: FETCH_IMAGES_SUCCESS,
        payload: response.data,
      });
    } catch (error) {
      console.error('Error fetching images:', error);
    }
  };
};
