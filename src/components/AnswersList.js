import * as React from 'react'
//import {Link} from 'react-router-dom'

export default function AnswersList(props) {
    // questions:
    // YES getting called?
    // do we have props?
    console.log('PROPS', props)
    // what are they { answers: [] }

    function checkAnswer(guess) {
        const isCorrect = guess === props.answer

        if (isCorrect) {
            alert('correct')
        } else {
            alert(`incorrect! the answer is ${props.answer}`)
        }
    }
    
    function renderButton(answer) {
        // geeting clled?
        // what is obj?
        console.log('answer', answer) // "malinois"
        return (
            <li key={answer}>
                <button onClick={() => checkAnswer(answer)}>
                    { answer }
                </button>
            </li>
        )
    }

    return (
        <div>
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