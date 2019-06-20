import React, {Component} from 'react';
import {connect} from 'react-redux'
import {getRandomBreeds} from '../actions/answers'
import { generateQuestionAndAnswers } from '../actions/dogs'
import AnswersList from './AnswersList'

class AnswersListContainer extends Component {
    componentDidMount() {
        this.props.generateQuestionAndAnswers()
        // this.props.getRandomBreeds();
        // X check if have dogs
        // X if not - get the dogs
        // once we have the dogs
        // create a question and an answer
        // dispatch action to reducer
    
    }

    render() {

        // Combine the answers into an array randomly
        const answers = [
            {...this.props.wrongAnswerOne, correct: false}, 
            {...this.props.wrongAnswerTwo, correct: false},
            {...this.props.correctAnswer, correct: true}
        ]
        

        // if(this.props.answers.length === 0) return 'Picking random dogs...';

        return <AnswersList answers={this.props.answers} />

        //return <AnswersList wrongAnswerOne={this.props.wrongAnswerOne} wrongAnswerTwo={this.props.wrongAnswerTwo} />
    }
}


const mapStateToProps = (reduxState) => {
    // Shuffle array
    const shuffledDogs = [...reduxState.dogs].sort(() => 0.5 - Math.random());

    // Get sub-array of first n elements after shuffled
    let selectedDogs = shuffledDogs.slice(0, 3);

    return {
        answers: selectedDogs,
        question: selectedDogs   
    }
}


export default connect(mapStateToProps, { generateQuestionAndAnswers })(AnswersListContainer)


// 
