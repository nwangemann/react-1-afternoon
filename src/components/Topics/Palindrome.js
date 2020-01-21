import React, {Component} from 'react';

export default class Palindrome extends Component {
    constructor(){
        super();

        this.state = {
            userInput: '',
            palindrome: ''
        }
    }
    
    handleChange(val) {
        this.setState({
          userInput: val
        });
      }

      palindromeCheck (str) {
        let result;
        let reverseStr = str.split('').reverse().join('')
        if (str === reverseStr){
            result = 'This is a palindrome!'
        } else {
            result = 'This is not a palindrome!'
        }
        this.setState({
            userInput: '',
            palindrome: result
        })
      }

    render(){
        return(
            <div className="puzzleBox filterStringPB">
            <h4>Palindrome</h4>
            <input
              className="inputLine"
              onChange={(event) => this.handleChange(event.target.value)}
            ></input>
            <button className="confirmationButton" onClick={() => this.palindromeCheck(this.state.userInput)}>Check!</button>
            <span className="resultsBox">
                Palindrome: {this.state.palindrome}
            </span>
            
          </div>
        )
    }
}