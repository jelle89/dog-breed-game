import * as React from 'react'

export default function DogList(props) {
    return (
        <div>
            <h1>A Wonderful List of Dog Breeds</h1>
            
            The amount of dog breeds on this list is: {props.dogs.length} !!
            {console.log("THERE ARE THE PROPS RECIEVING FROM DOGLISTCONTAINER:", props)}
            <ul>
            {props.dogs.map(dog =>
                <li key={dog}>
                    {dog}
                </li>
                )}
            </ul>
        </div>
        )
}
