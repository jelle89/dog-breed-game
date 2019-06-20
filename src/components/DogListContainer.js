import React, { Component } from "react";
import DogList from './DogList'
import { getDogs } from '../actions/dogs'
import { connect } from "react-redux";


class DogListContainer extends Component {
    componentDidMount() {
        // console.log('componentDidMount test:')
        this.props.getDogs();
    }

    render() {
        if(!this.props.dogs) return 'Have patience the dogs are coming...'
        return <DogList dogs={this.props.dogs} />
    }
}

const mapStateToProps = (reduxState) => {
    return {
        dogs: reduxState.dogs
    }
}

export default connect(mapStateToProps, { getDogs })(DogListContainer)