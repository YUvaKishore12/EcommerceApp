import {combineReducers} from 'redux';
import homeReducer from './reducers/homeReducer';
import homeSaga from './sagas/HomeSaga';
import {all} from 'redux-saga/effects';
import productReducer from './reducers/productdDetailsReducer';
import productSaga from './sagas/ProductSaga';

export const rootReducer = combineReducers({
  homeReducer,
  productReducer,
  // other reducers...
});

export function* rootSaga() {
  yield all([homeSaga(), productSaga()]);
}
