import * as React from 'react'
import {Link} from 'react-router-dom'

export default function BreedImages(props) {
    return (
        <div>
            <h1>Photos of "this" dog</h1>
            {console.log("THERE ARE THE PROPS RECIEVING FROM BREEDIMAGESCONTAINER:", props.images)}
            {props.images.map(image => 
                <img src={image} alt="dog" />
                )}


            <Link to="/breeds/list">Go back to list of breeds</Link>
            {/* <Link to="/">Home Page</Link> */}
        </div>
    )
}