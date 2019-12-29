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
    auth.onAuthStateChanged(async userAuth => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);

        // userRef.onSnapshot(snapShot => {
        //   this.setState({
        //     currentUser: {
        //       id: snapShot.id,
        //       ...snapShot.data()
        //     }
        //   });

        // });
        console.log(userRef);
      }
      console.log(this.state);
      this.setState({ currentUser: userAuth });
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
