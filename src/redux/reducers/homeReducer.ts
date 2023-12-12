import {FETCH_PRODUCTS_SUCCESS} from '../actions/homeActions';

const homeReducer = (state = {details: []}, action) => {
  switch (action.type) {
    case FETCH_PRODUCTS_SUCCESS:
      return {...state, details: action.details};
    default:
      return state;
  }
};
export default homeReducer;
