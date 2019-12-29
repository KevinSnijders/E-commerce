import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";

import Header from "./components/header/Header.component";
import Home from "./pages/home/Home.component";
import Shop from "./pages/shop/Shop.component";
import Sign from "./pages/sign/Sign.component";
import { auth, createUserProfileDocument } from "./firebase/firebase.utils";

import "./App.scss";

interface Props {}

export interface User {
  currentUser: firebase.User | null;
}
interface State {}

class App extends Component<Props, State & User> {
  constructor(props: Props) {
    super(props);

    this.state = {
      currentUser: null
    };
  }

  componentDidMount() {
    this.handleAuth();
  }

  componentWillUnmount() {
    this.handleAuth();
  }

  handleAuth = () => {
    auth.onAuthStateChanged(async user => {
      createUserProfileDocument(user);
      if (user) {
        this.setState({
          currentUser: user
        });
      } else {
        this.setState({
          currentUser: null
        });
      }
    });
  };

  render() {
    const { currentUser } = this.state;
    return (
      <div className="App">
        <Header currentUser={currentUser} />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/shop" component={Shop} />
          <Route path="/signin" component={Sign} />
        </Switch>
      </div>
    );
  }
}

export default App;
