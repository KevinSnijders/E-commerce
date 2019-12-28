import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";

import Header from "./components/header/Header.component";
import Home from "./pages/home/Home.component";
import Shop from "./pages/shop/Shop.component";

import "./App.scss";

class App extends Component<{}> {
  componentDidMount() {
    return null;
  }

  render() {
    return (
      <div className="App">
        <Header />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/shop" component={Shop} />
          <Home />
        </Switch>
      </div>
    );
  }
}

export default App;
