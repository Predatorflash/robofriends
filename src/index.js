import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import * as serviceWorker from "./serviceWorker";
import { robots } from "./robots";
import CardList from "./CardList.js";

ReactDOM.render(
  <div>
    <h1 className="f1 tc ">My Robot Friends</h1>
    <CardList robots={robots} />
  </div>,

  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
