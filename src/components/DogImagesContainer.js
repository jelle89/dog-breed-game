import React from 'react'
import DogImages from './DogImages'
import { connect } from 'react-redux';

class DogImagesContainer extends React.Component {
    componentDidMount() {
        console.log("WHAT ARE MY PROPS?:", this.props)
        // const breed = this.props
        this.props.dogImage(breed);
    }
    
    render() {
        return (
            <div>
                <DogImages />
            </div>
        )
    }
}

const mapStateToProps = (reduxState) => {
    dogimages: reduxState.dogimages;
}

export default connect(mapStateToProps, {dogImage})(DogImagesContainer)   