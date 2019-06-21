import * as React from 'react'
// import selectAnswer from '../actions/gameOne'

export default function GameOne(props) {
    console.log("WHAT ARE MY PROPS?", props)
    return (
        <div>
            <h2>Which dog breed matched the image?</h2>
            <h3>Click on your answer...</h3>
            <div className="answers">
                {
                    props.threeDogs &&
                    <ul>
                        {props.threeDogs.answers.map(renderButton)}
                        {renderButton(props.threeDogs.question)}
                    </ul>
                }
                <h1>HEYYYYYYYYYYY</h1>
            </div>
        </div>
    )
}

function renderButton(dogObject) {
    return (
        <li key={dogObject}>
            {/* <button onClick={() => selectAnswer(dogObject)}>{dogObject}</button> */}
            <button>{dogObject}</button>
        </li>
    )
}