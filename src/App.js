import React, { Component } from "react";
import CardList from "./CardList";
import { robots } from "./robots";
import Searchbox from "./Searchbox";
class App extends Component {
  constructor() {
    super();
    this.state = {
      robots: robots,
      searchfield: ""
    };
  }
  onsearchchange(event) {
    console.log(event.target.value);
  }
  render() {
    return (
      <div className="tc">
        <h1 className="f1 tc "> My Robot Friends</h1>
        <Searchbox searchchange={this.onsearchchange} />
        <CardList robots={this.state.robots} />;
      </div>
    );
  }
}
export default App;
