import React, {Component} from 'react';
import FilterObject from '../Topics/FilterObject';
import FilterString from '../Topics/FilterString';
import Palindrome from '../Topics/Palindrome';
import EvenAndOdd from '../Topics/EvenAndOdd';
import Sum from '../Topics/Sum';

export default class TopicBrowser extends Component {
    render(){
        return(
            <div>
               <FilterObject />
               <FilterString />
               <Palindrome />
               <EvenAndOdd />
               <Sum />
            </div>
        )
    }
}

