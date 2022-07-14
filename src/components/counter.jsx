import React, { Component } from "react";

class Counter extends Component {
  render() {
    //console.log("props", this.props);
    const { counter, onIncrement, onDecrement, onDelete } = this.props;
    return (
      <div className="row">
        <div className="col">
          <span className="badge m-1 badge-primary">{counter.title}</span>
        </div>
        <div className="col-12">
          <span className="badge m-1 badge-warning">
            Price : $ {counter.quantity * counter.price}
          </span>
        </div>
        <div className="col">
          <div className="btn-group m-2" role="group">
            <button
              onClick={() => onDecrement(counter)}
              type="button"
              className="btn btn-outline-primary btn-sm"
            >
              -
            </button>
            <div
              className="border border-primary "
              style={{ width: "26px", paddingTop: "5px" }}
            >
              <span className="badge" style={{ display: "grid" }}>
                {counter.quantity}
              </span>
            </div>
            <button
              onClick={() => onIncrement(counter)}
              type="button"
              className="btn btn-outline-primary btn-sm"
            >
              +
            </button>
          </div>
          <button
            onClick={() => onDelete(counter.id)}
            className="bnt btn-danger btn-sm"
          >
            Delete
          </button>
        </div>
      </div>
    );
  }
}

export default Counter;
