import * as React from 'react'
import {Link} from 'react-router-dom'

export default function DogList(props) {
    return (
        <div>
            <h1>A Wonderful List of Dog Breeds</h1>
            
            The amount of dog breeds on this list is: {props.dogs.length} !!
            {console.log("THERE ARE THE PROPS RECIEVING FROM DOGLISTCONTAINER:", props)}
            <ul>
            {props.dogs.map(dog =>
                <li key={dog}>
                    <Link to={`breeds/${dog}`}>{dog}</Link>
                    <Link to="/">Go to HomePage</Link>
                </li>
                )}
            </ul>
        </div>
        )
}
