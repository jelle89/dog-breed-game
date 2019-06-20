import React, {Component} from 'react';
import {connect} from 'react-redux'
import {getRandomBreeds} from '../actions/answers'
import AnswersList from './AnswersList'

class AnswersListContainer extends Component {
    componentDidMount() {
        this.props.getRandomBreeds();
    }

    render() {

        // Combine the answers into an array randomly
        const answers = [
            {...this.props.wrongAnswerOne, correct: false}, 
            {...this.props.wrongAnswerTwo, correct: false},
            // same for correct
        ];

        // Shuffle the answers


        if(!this.props.wrongAnswerOne || !this.props.wrongAnswerTwo) return 'Picking random dogs...';

        return <AnswersList answers={answers} />

        //return <AnswersList wrongAnswerOne={this.props.wrongAnswerOne} wrongAnswerTwo={this.props.wrongAnswerTwo} />
    }
}

const mapStateToProps = (reduxState) => {
    // return {
    //     wrongAnswerOne: reduxState.wrongAnswerOne,
    //     wrongAnswerTwo: reduxState.wrongAnswerTwo
    // }
}

export default connect(mapStateToProps, {getRandomBreeds})(AnswersListContainer)