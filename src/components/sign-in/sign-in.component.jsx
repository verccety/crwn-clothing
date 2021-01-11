import React, { Component } from 'react';
import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';
import { auth, signInWithGoogle } from '../../firebase/firebase.utils';
import { ButtonsBarContainer, SignInContainer, SignInTitle } from './sign-in.styles';

class SignIn extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: '',
      password: '',
    };
  }

  handleSubmit = async (event) => {
    event.preventDefault();
    const { email, password } = this.state;

    try {
      await auth.signInWithEmailAndPassword(email, password);
      this.setState({ email: '', password: '' });
    } catch (error) {
      console.log(error);
    }
  };

  handleChange = (event) => {
    const { value, name } = event.target;
    this.setState({ [name]: value });
  };

  render() {
    return (
      <SignInContainer>
        <SignInTitle>I already have an account</SignInTitle>
        <span>Sign in with your email and password</span>

        <form onSubmit={this.handleSubmit}>
          <FormInput
            type='email'
            name='email'
            id='email'
            value={this.state.email}
            label='email'
            required
            handleChange={this.handleChange}
          />
          <FormInput
            type='password'
            name='password'
            id='password'
            value={this.state.password}
            required
            label='password'
            handleChange={this.handleChange}
          />

          <ButtonsBarContainer>
            <CustomButton type='submit'>Sign in </CustomButton>
            <CustomButton type='button' onClick={signInWithGoogle} isGoogleSignIn>
              Sign in with Google{' '}
            </CustomButton>
          </ButtonsBarContainer>
        </form>
      </SignInContainer>
    );
  }
}

export default SignIn;
