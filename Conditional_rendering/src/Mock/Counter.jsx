import React, { Component } from "react";

class Counter extends Component {
  state = { count: 0 };

  increase = () => {
    this.setState({
      count: this.state.count + 1
    });
  };

  render() {
    return (
      <button onClick={this.increase}>
        Increase {this.state.count}
      </button>
    );
  }
}

export default Counter;