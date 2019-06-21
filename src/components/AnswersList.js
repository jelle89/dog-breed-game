import * as React from 'react'
//import {Link} from 'react-router-dom'

export default function AnswersList(props) {
    
    console.log('PROPS', props)
    

    function refreshPage() {
        window.location.reload()
    }

    function checkAnswer(guess) {
        const isCorrect = guess === props.answer

        if (isCorrect) {
            alert('correct');
            refreshPage(isCorrect)
        } else {
            alert(`incorrect! Here is the hint! ${props.answer}`)
        }
    }

    
    function renderButton(answer) {
        // geeting clled?
        // what is obj?
        console.log('answer', answer) // "malinois"
        return (
            <li key={answer}>
                <button onClick={() => checkAnswer(answer)} >
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
