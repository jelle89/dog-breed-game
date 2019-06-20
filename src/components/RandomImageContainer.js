import * as React from 'react'
import RandomImage from './RandomImage'
import {connect} from 'react-redux'
import {getRandomImage} from '../actions/randomimage'

class RandomImageContainer extends React.Component {

    componentDidMount() {
        
        this.props.getRandomImage()
        console.log(this.props.getRandomImage())
    }
    
    render() {
        console.log(this.props.images)
        if(!this.props.random) return 'Be patient dog images are coming...'
        return <RandomImage random={this.props.getRandomImage()} />
        
    }
}

const mapStateToProps = (reduxState) => {
    return {
        random: reduxState.random
    }
}

export default connect(mapStateToProps, {getRandomImage})(RandomImageContainer)