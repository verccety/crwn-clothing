import React, { lazy, useEffect, Suspense } from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { Redirect, Route, Switch } from 'react-router-dom';
import ErrorBoundary from './components/error-boundary/error-boundary.component'
import Header from './components/header/header.component';
import {  GlobalStyle} from "./global.styles";
import { checkUserSession } from './redux/user/user.actions';
import { selectCurrentuser } from './redux/user/user.selector';
import { selectCollectionsForPreview } from './redux/shop/shop.selectors';
import Spinner from "./components/spinner/spinner.component";
const HomePage = lazy(() => import('./pages/homepage/homepage.component'))
const ShopPage = lazy(() => import('./pages/shop/shop.component'))
const SignInAndSignUp = lazy(() => import('./pages/sign-in-and-sign-up/sign-in-and-sign-up.component'))

const CheckoutPage = lazy(() => import('./pages/checkout/checkout.component'))



const App = ({ checkUserSession, currentUser }) => {
  useEffect(() => {
    checkUserSession();
  }, [checkUserSession]);

  return (
    <div>
    <GlobalStyle/>
      <Header />
      <Switch>
      <ErrorBoundary>
      <Suspense fallback={<Spinner/>}>
        <Route exact path='/' component={HomePage} />
        <Route path='/shop' component={ShopPage} />
        <Route exact path='/checkout' component={CheckoutPage} />

        <Route
          exact
          path='/signin'
          render={() => (currentUser ? <Redirect to='/' /> : <SignInAndSignUp />)}
        />
        </Suspense>
        </ErrorBoundary>
      </Switch>
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentuser,
  collectionsArray: selectCollectionsForPreview,
});

const mapDispatchToProps = (dispatch) => ({
  checkUserSession: () => dispatch(checkUserSession()),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
