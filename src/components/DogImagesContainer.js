import React from 'react'
import DogImages from './DogImages'
import { connect } from 'tls';

export default class DogImagesContainer extends React.Component {
    componentDidMount() {
        this.props.dogImage;
    }
    
    render() {
        return (
            <div>
                <DogImages />
            </div>
        )
    }
}

mapStateToProps = (reduxState) => {
    dogimages: reduxState.dogimages;
}

export default connect(mapStateToProps, {dogimage})(DogImagesContainer)   