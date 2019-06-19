import * as React from 'react'
import {Link} from 'react-router-dom'

export default function BreedImages(props) {
    const tenImages = props.images.slice(0, 10)
    return (
        <div>
            <h1>Photos of "this" dog</h1>

            <Link to="/list">Go back to list of breeds</Link>
            <Link to="/">Home Page</Link>

            {tenImages.map(image => 
                <img src={image} alt="dog" key={image} />
                )}

        </div>
    )
}


//props.images.slice(10)