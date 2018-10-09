import React, { Component } from "react";
import "tachyons";
class Card extends Component {
  render() {
    return (
      <div className="bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5">
        <h1>Robot Friends</h1>
        <img src="https://robohash.org/63.143.42.242.png" alt="Robots" />
        <div>
          <h2> Jane Doe </h2>
          <p> janedoe @gmail.com </p>
        </div>
      </div>
    );
  }
}
export default Card;
