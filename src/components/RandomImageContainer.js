import * as React from 'react'
import RandomImage from './RandomImage'
import {connect} from 'react-redux'
import {getRandomImage} from '../actions/randomimage'

class RandomImageContainer extends React.Component {

    componentDidMount() {
        
        this.props.getRandomImage()
       
    }
    
    render() {
        console.log(this.props.images)
        if(!this.props.images) return 'Be patient dog images are coming...'
        return <RandomImage images={this.props.images} />
        
    }
}

const mapStateToProps = (reduxState) => {
    return {
        images: reduxState.images
    }
}

export default connect(mapStateToProps, {getRandomImage})(RandomImageContainer)