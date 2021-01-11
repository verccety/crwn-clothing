import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { Redirect, Route, Switch } from 'react-router-dom';
import './App.css';
import Header from './components/header/header.component';
import {
  auth,
  createUserProfileDocument,
  addCollectionAndDocuments,
} from './firebase/firebase.utils';
import CheckoutPage from './pages/checkout/checkout.component';
import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component';
import SignInAndSignUp from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component';
import { setCurrentUser } from './redux/user/user.actions';
import { selectCurrentuser } from './redux/user/user.selector';
import { selectCollectionsForPreview } from './redux/shop/shop.selectors';

class App extends React.Component {
  unsubscribeFromAuth = null;

  componentDidMount() {
    const { setCurrentUser, collectionsArray } = this.props;

    // параметр userAuth текущая регист. инф. о польз.
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async (userAuth) => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);

        userRef.onSnapshot((snapShot) => {
          setCurrentUser({
            id: snapShot.id,
            ...snapShot.data(),
          });
        });
      }
      setCurrentUser(userAuth);
      addCollectionAndDocuments(
        'collections',
        // нужен не весь объект, а только title, items
        collectionsArray.map(({ title, items }) => ({ title, items })),
      );
    });
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }
  render() {
    return (
      <div>
        <Header />
        <Switch>
          <Route exact path='/' component={HomePage} />
          <Route path='/shop' component={ShopPage} />
          <Route exact path='/checkout' component={CheckoutPage} />

          <Route
            exact
            path='/signin'
            render={() => (this.props.currentUser ? <Redirect to='/' /> : <SignInAndSignUp />)}
          />
        </Switch>
      </div>
    );
  }
}
const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentuser,
  collectionsArray: selectCollectionsForPreview,
});

const mapDispatchToProps = (dispatch) => ({
  setCurrentUser: (user) => dispatch(setCurrentUser(user)),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
