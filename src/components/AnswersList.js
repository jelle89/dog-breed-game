import * as React from 'react'
//import {Link} from 'react-router-dom'

export default function AnswersList(props) {
    // questions:
    // YES getting called?
    // do we have props?
    console.log('PROPS', props)
    // what are they { answers: [] }
    return (
        <div>
            <h2>Which dog breed is it?</h2>
            <h3>Choose your answer...</h3>
            <div className="allAnswers">
                {
                    props.answers &&
                    <ul>
                        {
                            props.answers.map(renderButton)
                        }
                    </ul>
                }

            </div>
        </div>
    )
}

function selectAnswer(obj) {

}

function renderButton(obj) {
    // geeting clled?
    // what is obj?
    console.log('OBJ', obj) // "malinois"
    return (
        <li key={obj}>
            <button onClick={() => selectAnswer(obj)}>{ obj }</button>
        </li>
    )
}