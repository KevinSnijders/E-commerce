import React, { Component } from "react";
import "./App.css";

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
    return <div className="App">{text}</div>;
  }
}

export default App;
