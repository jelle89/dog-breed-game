import React, {Component} from 'react';
import {connect} from 'react-redux'
import GameOne from './GameOne'
import {getThreeDogs} from '../actions/gameOne'
import {createQandA} from '../actions/gameOne'
import {setQandA} from '../actions/gameOne'

class GameOneContainer extends Component {
    componentDidMount() {
        this.props.getThreeDogs()
    }
    render() {
        if(this.props.setQandA)
        
    }
}

const mapStateToProps = (reduxState) => {

}