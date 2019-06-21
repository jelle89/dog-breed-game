import React, {Component} from 'react';
import {connect} from 'react-redux'
// import {getRandomBreeds} from '../actions/answers'
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
        // const answers = [
        //     {...this.props.wrongAnswerOne, correct: false}, 
        //     {...this.props.wrongAnswerTwo, correct: false},
        //     // same for correct
        // ];

        // Shuffle the answers


        if(this.props.answers.length === 0) return 'Picking random dogs...';

        return <AnswersList answers={this.props.answers} question={this.props.question}/>
         

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
        question: selectedDogs[Math.floor(Math.random() * selectedDogs.length)]   
    }
}

export default connect(mapStateToProps, { generateQuestionAndAnswers })(AnswersListContainer)


// 



// WE NEED

// THE DATA
// X The list of dogs

// Question & Answer
// X Some random dogs and the dog from the question (Answers)
// X A random dog (Question)

// SAVE THE DATA
// We need to store this information
// Action
// Dispatch the action
// Handle the action to update the store
// Reducer

// DISPLAY THE DATA
// Component
// Put the data from the store into the component 

// MAKE IT INTERACTIVE
// ... worry about that later