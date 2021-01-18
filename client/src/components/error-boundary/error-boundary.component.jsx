import React, { Component } from 'react';
import { ErrorImageOverlay, ErrorImageContainer, ErrorImageText } from './error-boundary.styles';
class ErrorBoundary extends Component {
  state = {
    hasErrored: false,
  };
  // thrown error if any thrown in children
  static getDerivedStateFromError(error) {
    return {
      hasErrored: true,
    };
  }

  componentDidCatch(error, info) {}
  render() {
    return (
      <div>
        {this.state.hasErrored ? (
          <ErrorImageOverlay>
            <ErrorImageContainer imageUrl={'https://i.imgur.com/QIxIKBH.png'} />
            <ErrorImageText>Sorry this page is broken</ErrorImageText>
          </ErrorImageOverlay>
        ) : (
          this.props.children
        )}
      </div>
    );
  }
}

export default ErrorBoundary;
