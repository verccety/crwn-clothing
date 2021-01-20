import { all, call, takeLatest, put, select } from 'redux-saga/effects';
import UserActionTypes from '../user/user.types';
import { clearCart, fetchCartSuccess } from './cart.actions';
import { CartActionTypes } from './cart.types';
import { firestore } from '../../firebase/firebase.utils';
import { selectCart } from './cart.selectors';


export function* clearCartOnSignOut() {
  yield put(clearCart());
}

export function* onSignOutSuccess() {
  yield takeLatest(UserActionTypes.SIGN_OUT_SUCCESS, clearCartOnSignOut);
}

function* fetchCartAsync({ payload: { uid } }) {
  const state = yield select(selectCart);
  if (state.cartItems.length) return


  try {
    const cartRef = firestore.doc(`userCart/${uid}`);
    const snapshotCartItems = yield cartRef.get();
    const { cartItems } = yield snapshotCartItems.data();
    yield console.log(cartItems);
    yield put(fetchCartSuccess(cartItems));
  } catch (error) {
    yield console.log(error.message);
  }
}

export function* fetchCartStartAsync() {
  yield takeLatest(CartActionTypes.FETCH_CART_START, fetchCartAsync);
}

export function* cartSagas() {
  yield all([call(onSignOutSuccess), call(fetchCartStartAsync)]);
}
