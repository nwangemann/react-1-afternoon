import React, {Component} from 'react';

export default class FilterString extends Component {
    
    constructor(){
        super();

        this.state = {
            unFilteredArray: [
                'This is my first test string',
                'Well shoot, here goes another test string',
                'Maybe this is a little different than the others',
                'Or maybe it is just like all the other strings',
                'Who knows? I sure dont have a clue!',
                'That is why I made the filter!'
            ],
            userInput: '',
            filteredArray: []
        }
    }
    
    
    handleChange(val) {
        this.setState({
          userInput: val
        });
      }
    
      stringFilter = (arr, str) => {
          let filterArr = [];
        for (let i = 0; i < arr.length; i++){
            if (arr[i].includes(str) === true){
                filterArr.push(arr[i])
            }
        }
        this.setState({
            filteredArray: filterArr
        })
      }

    render() {

        return (
          <div className="puzzleBox filterStringPB">
            <h4>Filter String</h4>
            <input
              className="inputLine"
              onChange={(event) => this.handleChange(event.target.value)}
            ></input>
            <button className="confirmationButton" onClick={() => this.stringFilter(this.state.unFilteredArray, this.state.userInput)}>Filter!</button>
            <span className="puzzleText">
                Unfiltered: {JSON.stringify(this.state.unFilteredArray)}
            </span>
            <span className="resultsBox filterStringRB">
            Filtered: {JSON.stringify(this.state.filteredArray)}
            </span>
            
          </div>
        );
      }
}