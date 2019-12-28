import React, { Component } from "react";

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
        <Home />
        {text}
      </div>
    );
  }
}

export default App;
