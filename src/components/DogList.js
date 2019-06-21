import * as React from 'react'
import {Link} from 'react-router-dom'

export default function DogList(props) {
    return (
        <div>
            <h1>A List of Dog Breeds</h1>
            
            <h2>The amount of dog breeds on this list is: {props.dogs.length} !! Good luck.</h2>
            
            {props.dogs.map(dog =>
                <ul key={dog}>
                    <Link to={`/breed/${dog}`}>{dog}</Link>
                </ul>
                )}
            
            <Link to="/">Back to HomePage</Link>
        </div>
        )
}
