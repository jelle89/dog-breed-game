import React, { Component } from 'react';
import { connect } from 'react-redux'
import AnswersList from './AnswersList'

class AnswersListContainer extends Component {
    render () {
        return <AnswersList
            answers={this.props.answers}
            answer={this.props.answer}
        />
    }
}

const mapStateToProps = (reduxState) => {
    return reduxState.question
}

export default connect(
    mapStateToProps
)(
    AnswersListContainer
)