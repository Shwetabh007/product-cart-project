import React, { Component } from "react";
import "./App.css";
import NavBar from "./components/navbar";
import Counters from "./components/counters";
import Cards from "./components/cards";
import { getProducts } from "./services/fakeProduct";

class App extends Component {
  state = {
    counters: [],
    items: getProducts(),
    total: 0,
  };

  handleIncrement = (counter) => {
    //console.log("Increment", counter);
    const counters = [...this.state.counters];
    const index = counters.indexOf(counter);
    counters[index] = { ...counter };
    counters[index].quantity += 1;
    let total = this.state.total + counters[index].price;
    total = Math.round(total * 100) / 100;
    this.setState({ counters, total });
  };

  handleDecrement = (counter) => {
    //console.log("Decrement", counter);
    const counters = [...this.state.counters];
    const index = counters.indexOf(counter);
    counters[index] = { ...counter };
    let total = this.state.total - counters[index].price;
    total = Math.round(total * 100) / 100;
    counters[index].quantity -= 1;
    counters[index].quantity <= 0
      ? this.handleDelete(counter.id)
      : this.setState({ counters, total });
  };

  handleDelete = (counterId) => {
    //console.log("Event Handler Called", counterId);
    const product = this.state.counters.find((item) => item.id === counterId);
    let total = this.state.total - product.price * product.quantity;
    total = Math.round(total * 100) / 100;
    const counters = this.state.counters.filter((c) => c.id !== counterId);
    this.setState({ counters, total });
  };

  handleAdd = (product) => {
    product = { ...product };
    const val = this.state.counters.find((item) => item.id === product.id);
    let total = this.state.total + product.price;
    total = Math.round(total * 100) / 100;
    //console.log(val);
    val
      ? this.handleIncrement(val)
      : this.setState({
          counters: [...this.state.counters, product],
          total,
        });
  };

  // async componentDidMount() {
  //   const temp = await fetch("https://fakestoreapi.com/products/");
  //   const items = await temp.json();
  //   console.log(items);
  //   this.setState({ items });
  // }

  render() {
    //console.log(this.state.counters);
    return (
      <React.Fragment>
        <NavBar
          totalCounters={
            this.state.counters.filter((c) => c.quantity > 0).length
          }
        />
        <main role="main" className="container">
          <div className="row">
            <div className="col-9">
              <Cards items={this.state.items} onAdd={this.handleAdd} />
            </div>
            <div className="col-3">
              <Counters
                total={this.state.total}
                counters={this.state.counters}
                onIncrement={this.handleIncrement}
                onDecrement={this.handleDecrement}
                onDelete={this.handleDelete}
              />
            </div>
          </div>
        </main>
        )
      </React.Fragment>
    );
  }
}

export default App;
