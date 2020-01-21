import React, { Component } from "react";

export default class FilterObject extends Component {
  constructor() {
    super();

    this.state = {
        birds: [
            {
              name: "Petey",
              type: "Parrot",
              age: 5,
              favoriteFood: "Worms"
            },
            {
              name: "Henry",
              type: "Hawk",
              age: 105
            },
            {
              name: "Ozzie",
              type: "Owl",
              age: 7,
              favoriteFood: "Pizza!"
            },
            {
              name: "Crusher",
              type: "Canary",
              killCount: 9000
            }
          ],
      userInput: "",
      filteredArray: []
    };
  }

  handleChange(val) {
    this.setState({
      userInput: val
    });
  }

  filter(arr, filterVal) {
    let filtArray = []
    for (let i = 0; i < arr.length; i++) {
      if (arr[i].hasOwnProperty(`${filterVal}`)) {
        filtArray.push(arr[i]);
      }
    }
    this.setState({
        filteredArray: filtArray
    })
  }

  render() {

    return (
      <div className="puzzleBox filterObjectPB">
        <h4>Filter Object</h4>
        <input
          className="inputLine"
          onChange={(event) => this.handleChange(event.target.value)}
        ></input>
        <button className="confirmationButton" onClick={() => this.filter(this.state.birds, this.state.userInput)}>Filter!</button>
        <span className="puzzleText">
          Unfiltered: {JSON.stringify(this.state.birds)}
        </span>
        <span className="resultsBox filterObjectRB">
          Filtered: {JSON.stringify(this.state.filteredArray)}
        </span>
        
      </div>
    );
  }
}
