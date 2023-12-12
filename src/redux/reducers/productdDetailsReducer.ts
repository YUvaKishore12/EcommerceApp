// productReducer.js
import {
  FETCH_PRODUCT_DETAILS,
  FETCH_PRODUCT_SUCCESS,
} from '../actions/productActions';

const initialState = {
  details: [],
  loading: false,
};

const productReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_PRODUCT_DETAILS:
      return {
        ...state,
        loading: true,
      };
    case FETCH_PRODUCT_SUCCESS:
      return {
        ...state,
        details: action.details || [], // Ensure details is an array
        loading: false,
      };
    default:
      return state;
  }
};

export default productReducer;
