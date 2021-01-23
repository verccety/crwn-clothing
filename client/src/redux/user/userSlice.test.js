import * as actions from './userSlice';
import reducer from './userSlice';

describe('cartSlice', () => {
  const INITIAL_STATE = {
    currentUser: null,
    error: null,
  };

  it('Should return the initial state', () => {
    expect(reducer(undefined, {})).toEqual(INITIAL_STATE);
  });

  it('on SignIn Success', () => {
    const ERROR_FALSE = {
      currentUser: null,
      error: false,
    };
    expect(
      reducer(ERROR_FALSE, {
        type: actions.signInSuccess.type,
        payload: {
          currentUser: {
            name: 'bobby',
            createdAt: 1337,
          },
        },
      }).error
    ).toEqual(null);
  });
});
