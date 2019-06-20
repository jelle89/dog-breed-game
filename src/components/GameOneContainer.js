import React, {Component} from 'react';
import {connect} from 'react-redux'
import GameOne from './GameOne'
import {getThreeDogs} from '../actions/gameOne'
// import {createQandA} from '../actions/gameOne'
// import {setQandA} from '../actions/gameOne'

class GameOneContainer extends Component {
    componentDidMount() {
        this.props.getThreeDogs()
    }
    render() {
        if(this.props.threeDogs.length === 0) return 'Picking random dogs...'
        return <GameOne threeDogs={this.props.threeDogs} />
    }
}

const mapStateToProps = (reduxState) => {
    console.log("HERE!", reduxState.threeDogs)
    const selectedDogs = [...reduxState.threeDogs]
    return {
        answers: selectedDogs,
        question: selectedDogs[0]
    }
}

export default connect(mapStateToProps, {getThreeDogs})(GameOneContainer)