import React, { Component } from "react";
import Card from "./card";
class Cards extends Component {
  render() {
    const { items, onAdd } = this.props;
    return (
      <div className="row ">
        {items.map((item) => (
          <div
            key={item.id}
            className="col-sm-3 "
            style={{ paddingBottom: "15px" }}
          >
            <Card
              key={item.id}
              item={item}
              onAdd={onAdd}
              style={{ "max-height": "380px" }}
            />
          </div>
        ))}
      </div>
    );
  }
}

export default Cards;
