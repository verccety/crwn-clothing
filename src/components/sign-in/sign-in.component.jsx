import React, { Component } from 'react';
import { connect } from 'react-redux';
import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';
import { ButtonsBarContainer, SignInContainer, SignInTitle } from './sign-in.styles';
import { googleSignInStart, emailSignInStart } from '../../redux/user/user.actions';
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
    const { emailSignInStart } = this.props;
    const { email, password } = this.state;

    emailSignInStart(email, password);
  };

  handleChange = (event) => {
    const { value, name } = event.target;
    this.setState({ [name]: value });
  };

  render() {
    const { googleSignInStart } = this.props;
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
            <CustomButton type='button' onClick={googleSignInStart} isGoogleSignIn>
              Sign in with Google{' '}
            </CustomButton>
          </ButtonsBarContainer>
        </form>
      </SignInContainer>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  googleSignInStart: () => dispatch(googleSignInStart()),
  emailSignInStart: (email, password) => dispatch(emailSignInStart({ email, password })),
});

export default connect(null, mapDispatchToProps)(SignIn);
