import React, { Component } from "react";

class Card extends Component {
  render() {
    const { item, onAdd } = this.props;
    return (
      <div className="card h-100">
        <img
          src={item.image}
          className="card-img-top"
          style={{ maxHeight: "110px" }}
          alt="..."
        />
        <div className="card-body">
          <h5 className="card-title" style={{ fontWeight: "lighter" }}>
            {item.title.slice(0, 22)}...
          </h5>
          {/* <p className="card-text">{item.description.slice(0, 60)}</p> */}
          <div style={{ fontWeight: "bold" }}>${item.price}</div>
          <button
            onClick={() =>
              onAdd({
                id: item.id,
                title: item.title,
                price: item.price,
                quantity: 1,
              })
            }
            className="btn btn-primary m-2"
          >
            Add to Cart
          </button>
        </div>
      </div>
    );
  }
}

export default Card;
