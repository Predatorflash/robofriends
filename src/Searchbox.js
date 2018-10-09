import React, { Component } from "react";
import "tachyons";
class Searchbox extends Component {
  render() {
    return (
      <div className="pa2 ">
        <input
          id="ad"
          className="pa3 ba b--green bg-lightest-blue"
          type="search"
          placeholder="search here"
          onChange={this.props.searchchange}
        />
      </div>
    );
  }
}
export default Searchbox;
