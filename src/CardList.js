import React, { Component } from "react";
import Card from "./Card";

class CardList extends Component {
  render() {
    let { robots: rows } = this.props;

    const cas = rows.map((i, obj) => {
      return <Card email={i.email} name={i.name} key={i.id} id={i.id} />;
    });

    return cas;
  }
}
export default CardList;
