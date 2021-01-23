import { signOutSuccess } from '../user/userSlice';
import { clearCartOnSignOut, onSignOutSuccess } from './cart.sagas';
import { takeLatest } from 'redux-saga/effects';

describe('on signout success sage', () => {
  it('should trigger onSignOutSuccess', async () => {
    const generator = onSignOutSuccess();
    expect(generator.next().value).toEqual(takeLatest(signOutSuccess.type, clearCartOnSignOut));
  });
});
