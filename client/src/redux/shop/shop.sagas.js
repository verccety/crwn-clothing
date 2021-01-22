import { takeLatest, call, put, all } from 'redux-saga/effects';
import {
  fetchCollectionsStart,
  fetchCollectionsSuccess,
  fetchCollectionsFailure,
} from './shopSlice';
import { firestore, convertCollectionsSnapshotToMap } from '../../firebase/firebase.utils';

function* fetchCollectionsAsync() {
  try {
    const collectionRef = firestore.collection('collections');
    const snapshot = yield collectionRef.get();
    const collectionsMap = yield call(convertCollectionsSnapshotToMap, snapshot);
    yield put(fetchCollectionsSuccess(collectionsMap));
  } catch (error) {
    yield put(fetchCollectionsFailure(error.message));
  }
}

export function* fetchCollectionsStartAsync() {
  yield takeLatest(fetchCollectionsStart.type, fetchCollectionsAsync);
}

export function* shopSagas() {
  yield all([call(fetchCollectionsStartAsync)]);
}
