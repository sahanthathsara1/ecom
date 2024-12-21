import { call, put, takeEvery } from 'redux-saga/effects';
import axios from 'axios';
import { FETCH_PRODUCTS, setProducts } from './actions';

function* fetchProductsSaga() {
  try {
    const response = yield call(axios.get, '/api/products');
    yield put(setProducts(response.data));
  } catch (error) {
    console.error('Failed to fetch products', error);
  }
}

function* saga() {
  yield takeEvery(FETCH_PRODUCTS, fetchProductsSaga);
}

export default saga;
