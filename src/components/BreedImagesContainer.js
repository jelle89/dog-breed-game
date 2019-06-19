import * as React from 'react'
import BreedImages from './BreedImages'
import {connect} from 'react-redux'
import {getImagesByBreed} from '../actions/images'

class BreedImagesContainer extends React.Component {
    componentDidMount() {
        const breed = this.props.match.params.breed
        this.props.getImagesByBreed(breed)
    }

    render() {
        if(!this.props.images) return 'Be patient dog images are coming...'
        return <BreedImages images={this.props.images} />
    }
}

const mapStateToProps = (reduxState) => {
    return {
        images: reduxState.images
    }
}

export default connect(mapStateToProps, {getImagesByBreed})(BreedImagesContainer)