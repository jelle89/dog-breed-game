import * as React from 'react'
//import {Link} from 'react-router-dom'

export default function AnswersList(props) {
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



                                <button className="answerOne">Answer 1</button>
                <button className="answerTwo">Answer 2</button>
                <button className="answerThree">Answer 3</button>
            </div>
        </div>
    )
}

function selectAnswer(obj) {

}

function renderButton(obj) {
    return (
        <li key={obj.name}>
            <button onClick={() => selectAnswer(obj)}>obj.name</button>
        </li>
    )
}