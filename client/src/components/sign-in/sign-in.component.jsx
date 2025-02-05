import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';
import { ButtonsBarContainer, SignInContainer, SignInTitle } from './sign-in.styles';
import { googleSignInStart, emailSignInStart } from '../../redux/user/user.actions';

const SignIn = () => {
  const [userCredetials, setCredetials] = useState({ email: '', password: '' });
  const dispatch = useDispatch();

  const { email, password } = userCredetials;
  const handleSubmit = async (event) => {
    event.preventDefault();

    dispatch(emailSignInStart({ email, password }));
  };

  const handleChange = (event) => {
    const { value, name } = event.target;
    setCredetials({ ...userCredetials, [name]: value });
  };

  return (
    <SignInContainer>
      <SignInTitle>I already have an account</SignInTitle>
      <span>Sign in with your email and password</span>

      <form onSubmit={handleSubmit}>
        <FormInput
          type='email'
          name='email'
          id='email'
          value={email}
          label='email'
          required
          handleChange={handleChange}
        />
        <FormInput
          type='password'
          name='password'
          id='password'
          value={password}
          required
          label='password'
          handleChange={handleChange}
        />

        <ButtonsBarContainer>
          <CustomButton type='submit'>Sign in </CustomButton>
          <CustomButton type='button' onClick={() => dispatch(googleSignInStart())} isGoogleSignIn>
            Sign in with Google{' '}
          </CustomButton>
        </ButtonsBarContainer>
      </form>
    </SignInContainer>
  );
};

export default SignIn;
