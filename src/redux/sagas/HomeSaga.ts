import {call, put, takeEvery} from 'redux-saga/effects';
import {FETCH_PRODUCTS, FETCH_PRODUCTS_SUCCESS} from '../actions/homeActions';
import axios from 'axios';

async function fetchProductDetails() {
  try {
    const response = await axios.get(
      'https://api.escuelajs.co/api/v1/products',
    );
    return response.data;
  } catch (error) {
    console.log(error);
  }
}
function* getProductDetails(): Generator<any, void, any> {
  const details = yield call(fetchProductDetails);
  yield put({type: FETCH_PRODUCTS_SUCCESS, details});
}
function* homeSaga() {
  yield takeEvery(FETCH_PRODUCTS, getProductDetails);
}
export const selectGetProductsData = (state: {homeReducer: {details: any}}) =>
  state.homeReducer?.details;
export default homeSaga;
