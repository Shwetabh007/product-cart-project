import React, { Component } from "react";
import Counter from "./counter";

class Counters extends Component {
  render() {
    const { total, counters, onDelete, onIncrement, onDecrement } = this.props;
    return (
      <React.Fragment>
        <div>
          <span className="badge m-1 badge-success">
            Total Cost : $ {total}
          </span>
        </div>
        <div>
          {counters.map((counter) => (
            <div className="" style={{ paddingLeft: "0px" }}>
              <Counter
                key={counter.id}
                onDelete={onDelete}
                onIncrement={onIncrement}
                onDecrement={onDecrement}
                counter={counter}
              />
            </div>
          ))}
        </div>
      </React.Fragment>
    );
  }
}

export default Counters;
