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
  onsearchchange = event => {
    this.setState({ searchfield: event.target.value });
    console.log(this.state.searchfield);
  };
  render() {
    const robotsa = this.state.robots.filter(robots => {
      return robots.name
        .toLowerCase()
        .includes(this.state.searchfield.toLowerCase());
    });
    return (
      <div className="tc">
        <h1 className="f1 tc "> My Robot Friends</h1>
        <Searchbox searchchange={this.onsearchchange} />
        <CardList robots={robotsa} />
      </div>
    );
  }
}
export default App;
