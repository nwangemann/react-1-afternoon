import React, {Component} from 'react';

export default class EvenAndOdd extends Component {
    constructor(){
        super();

        this.state = {
        evenArray: [],
        oddArray: [],
        userInput: ''
        }
    }

    handleChange(value){
        this.setState({
            userInput: value
        });
    }

    assignEvenAndOdds(userInput){
        let resultArr1 = [];
        let resultArr2 = [];
        let arr = userInput.split(',')
        for (let i = 0; i < arr.length; i++){
            if(arr[i] % 2 === 0){
                resultArr1.push(arr[i])
            } else {
                resultArr2.push(arr[i])
            }
        }
        this.setState({
            evenArray: resultArr1,
            oddArray: resultArr2
        })
    }


    render(){
        return(
            <div className="puzzleBox evenAndOddPB">
                <h4>Evens and Odds</h4>
                <input className="inputLine" onChange={(event) => this.handleChange(event.target.value)}></input>
                <button className="confirmationButton" 
                onClick={() => {this.assignEvenAndOdds(this.state.userInput)}}>Sort!</button>
                <span className="resultsBox"> Evens: {JSON.stringify(this.state.evenArray)} </span>
                <span className="resultsBox"> Odds: {JSON.stringify(this.state.oddArray)} </span>
            </div>
        )
    }
}