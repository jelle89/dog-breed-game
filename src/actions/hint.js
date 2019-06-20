import * as React from 'react'
import { connect } from "react-redux";



export class hint extends React.Component() {
    render() {
        if(this.props.answer !== correctAnswer) {
            return 
            <div className="hintButton" type="button">
                <Button as="input" type="reset" value="Reset" />HINT</Button>
            </div>
        }
    }
}

const mapStateToProps = (state) => {
    return {
        answer: state.answer,
        correctAnswer: state.correctAnswer
    }
}

export default connect(mapStateToProps, {})(hint)
