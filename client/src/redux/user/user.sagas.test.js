import { signUp } from './user.sagas';
import { auth } from '../../firebase/firebase.utils';

describe('on sign up Saga', () => {
  const mockEmail = 'test@vasya.com';
  const mockPassword = 12341234;
  const mockDisplayName = 'vasya';

  const mockAction = {
    payload: {
      email: mockEmail,
      password: mockPassword,
      displayName: mockDisplayName,
    },
  };

  const generator = signUp(mockAction);

  it('should call auth.createUserWithEmailAndPassword', () => {
    const createUserWithEmailAndPassword = jest.spyOn(auth, 'createUserWithEmailAndPassword');
    generator.next();
    expect(createUserWithEmailAndPassword).toHaveBeenCalled();
  });
});
