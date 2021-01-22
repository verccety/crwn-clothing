import { all, call, takeLatest, put, select } from 'redux-saga/effects';
import { clearCart, fetchCartSuccess } from './cartSlice';
import { firestore } from '../../firebase/firebase.utils';
import { selectCart } from './cart.selectors';
import { signInSuccess, signOutSuccess } from '../user/userSlice';
export function* clearCartOnSignOut() {
  yield put(clearCart());
}

export function* onSignOutSuccess() {
  yield takeLatest(signOutSuccess.type, clearCartOnSignOut);
}

function* fetchCartAsync({ payload: { id } }) {
  const state = yield select(selectCart);
  if (state.cartItems.length) return;

  try {
    const cartRef = firestore.doc(`userCart/${id}`);
    const snapshotCartItems = yield cartRef.get();
    const { cartItems } = yield snapshotCartItems.data();
    yield put(fetchCartSuccess(cartItems));
  } catch (error) {
    yield console.log(error.message);
  }
}

export function* fetchCartStartAsync() {
  yield takeLatest(signInSuccess.type, fetchCartAsync);
}

export function* cartSagas() {
  yield all([call(onSignOutSuccess), call(fetchCartStartAsync)]);
}
