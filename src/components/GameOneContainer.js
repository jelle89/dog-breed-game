import React, {Component} from 'react';
import {connect} from 'react-redux'
import GameOne from './GameOne'
import {getThreeDogs} from '../actions/gameOne'
import {createQandA} from '../actions/gameOne'
import {setQandA} from '../actions/gameOne'

class GameOneContainer extends Component {
    componentDidMount() {
        console.log('componentDidMount test:')
        this.props.getThreeDogs()
    }
    render() {
        console.log("HELLO!")
        if(this.props.gameOne === 0) return 'Picking random dogs...'
        return <GameOne threeDogs={this.props.gameOne} />
        // return <GameOne />

    }
}

const mapStateToProps = (reduxState) => {
    // console.log("STATE", reduxState)
    // console.log("HERE!", reduxState.threeDogs)
    const selectedDogs = [...reduxState.gameOne]
    console.log("SELECTED DOGS", selectedDogs)
    // return {
    //     answers: selectedDogs,
    //     question: selectedDogs[0]
    // }
    return {
        threeDogs: selectedDogs
    }
}

// const mapStateToProps = (reduxState) => {
//     console.log("STATE of gameOne", reduxState.gameOne)
//     return {
//         // answers: [...reduxState.gameOne.threeDogs.answers],
//         // question: [...reduxState.gameOne.threeDogs.question]

//     }
// }

export default connect(mapStateToProps, { getThreeDogs, createQandA, setQandA })(GameOneContainer)
//export default GameOneContainer