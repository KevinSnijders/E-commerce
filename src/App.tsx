import React, { Component } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { Dispatch, AnyAction } from "redux";
import setCurrentUser from "./redux/user/userActions";
import { UserState } from "./redux/user/userReducer";
import { RootState } from "./redux/rootReducer";
import Header from "./components/header/Header.component";
import Home from "./pages/home/Home.component";
import Shop from "./pages/shop/Shop.component";
import Sign from "./pages/sign/Sign.component";
import { auth, createUserProfileDocument } from "./firebase/firebase.utils";

import "./App.scss";

const mapStateToProps = ({ user }: RootState) => ({
  currentUser: user.currentUser
});

const mapDispatchToProps = (dispatch: Dispatch<AnyAction>) => ({
  setCurrentUserReact: (user: UserState) => dispatch(setCurrentUser(user))
});

class App extends Component<
  ReturnType<typeof mapDispatchToProps> & ReturnType<typeof mapStateToProps>,
  {}
> {
  componentDidMount() {
    this.handleAuth();
  }

  componentWillUnmount() {
    this.handleAuth();
  }

  handleAuth = () => {
    const { setCurrentUserReact } = this.props;
    auth.onAuthStateChanged(async userAuth => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);
        userRef.onSnapshot(snapShot => {
          setCurrentUserReact({
            currentUser: { id: snapShot.id, ...snapShot.data() }
          });
        });
      }
      setCurrentUserReact({ currentUser: userAuth });
    });
  };

  render() {
    const { currentUser } = this.props;
    return (
      <div className="App">
        <Header />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/shop" component={Shop} />
          <Route
            exact
            path="/signin"
            render={() => (currentUser ? <Redirect to="/" /> : <Sign />)}
          />
        </Switch>
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
