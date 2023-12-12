import {call, put, takeEvery} from 'redux-saga/effects';

import axios from 'axios';
import {
  FETCH_PRODUCT_DETAILS,
  FETCH_PRODUCT_SUCCESS,
} from '../actions/productActions';

async function fetchProductDetails(id: string) {
  try {
    const response = await axios.get(
      `https://api.escuelajs.co/api/v1/products/${id}`,
    );
    console.log(response.data, ' in the product saga');
    return response.data;
  } catch (error) {
    console.log(error);
    throw error; // Throw the error to indicate failure
  }
}
function* getProductDetails(action: {
  type: string;
  payload: {id: string; callback?: (success: boolean) => void};
}): Generator<any, void, any> {
  const {id, callback} = action.payload;

  try {
    const details = yield call(fetchProductDetails, id);
    yield put({type: FETCH_PRODUCT_SUCCESS, details});

    // If the fetch is successful, invoke the callback with true
    if (callback && typeof callback === 'function') {
      callback(true);
    }
  } catch (error) {
    // If there's an error, invoke the callback with false
    if (callback && typeof callback === 'function') {
      callback(false);
    }
  }
}

function* productSaga() {
  yield takeEvery(FETCH_PRODUCT_DETAILS, getProductDetails);
}

export const selectGetProductDetails = (state: {
  productReducer: {details: any};
}) => state.productReducer?.details;
export const selectProductsLoading = (state: {
  productReducer: {loading: boolean};
}) => state.productReducer?.loading;
export default productSaga;
