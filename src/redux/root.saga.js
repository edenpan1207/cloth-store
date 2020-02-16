import {all, call} from 'redux-saga/effects';
import {fetchCollectionsAsync} from './shop/shop.saga';

export default function* rootSaga() {
  yield all([call(fetchCollectionsAsync)])
}