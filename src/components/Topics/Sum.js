import React, { Component } from "react";

export default class Sum extends Component {
  constructor() {
    super();

    this.state = {
      number1: 0,
      number2: 0,
      sum: null
    };
  }

  valueGrab1(val) {
    this.setState({
      number1: parseInt(val, 10)
    });
  }

  valueGrab2(val) {
    this.setState({
      number2: parseInt(val, 10)
    });
  }

  sum(n1, n2){
      this.setState({
          sum: n1 + n2
      })
  }

  render() {
    return (
      <div className="puzzleBox sumPB">
        <h4>Sum</h4>
        <input
        type="number"
          className="inputLine"
          onChange={event => this.valueGrab1(event.target.value)}
        ></input>
        <input
        type="number"
          className="inputLine"
          onChange={event => this.valueGrab2(event.target.value)}
        ></input>
        <button
          className="confirmationButton"
          onClick={() => this.sum(this.state.number1, this.state.number2)}
        >
          Check!
        </button>
        <span className="resultsBox">Sum:{this.state.sum}</span>
      </div>
    );
  }
}
