import React, { Component } from 'react';
import { connect } from 'react-redux'
import AnswersList from './AnswersList'


class AnswersListContainer extends Component {
    
    render () {
        return <AnswersList
            answers={this.props.answers}
            answer={this.props.answer}
            makeQuestion={this.props.makeQuestion}
        />
    }
}

const mapStateToProps = (reduxState) => {
    return reduxState.question
}

const mapDispatchToProps = (reduxState) => {

    return reduxState.makeQuestion
}

export default connect
    (mapStateToProps, mapDispatchToProps)(AnswersListContainer)

    