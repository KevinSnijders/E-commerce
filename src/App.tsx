import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import Home from "./pages/home/Home.component";

interface Props {}

interface State {
  text: string;
}
class App extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      text: "App"
    };
  }

  render() {
    const { text } = this.state;
    return (
      <div className="App">
        <Switch>
          <Route exact path="/" component={Home} />
          <Home />
        </Switch>
        {text}
      </div>
    );
  }
}

export default App;
