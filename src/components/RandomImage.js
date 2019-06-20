import * as React from 'react'
import {Link} from 'react-router-dom'

export default function RandomImage(props) {
    const images = props.images
    console.log(images)
    return (
        <div>
            <h1>Photo of random dog</h1>

            <Link to="/list">Go back to list of breeds</Link>
            <Link to="/">Home Page</Link>

            
            {images.map(image => 
                <img src={image} alt="dog" />
                )}
       
                

        </div>
    )
}