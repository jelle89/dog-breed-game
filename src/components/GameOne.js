import React from 'react'
import AnswersListContainer from './AnswersListContainer';
import { makeQuestion } from '../actions/dogs'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

class GameOne extends React.Component {    
    componentDidMount() {
        this.props.makeQuestion()   
    }
   
    render() {
        console.log('this state',this.state)
        
        return (
            <div className="gameOneImage">
                <h1>What breed is this dog?</h1>
                <img src={this.props.image} alt={this.props.answer} />
                <AnswersListContainer />
                <Link to='/'>Go to homepage</Link>
            </div>
        )
    }
}


const mapStateToProps = (reduxState) => {
    return reduxState.question
}

const mapDispatchToProps = { makeQuestion }

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(GameOne)