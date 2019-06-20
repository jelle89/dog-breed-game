import { SET_RANDOM_BREEDS } from '../actions/answers'
import { CORRECT_ANSWER } from '../actions/answers'

export default (reduxState = [], action = {}) => {
    switch (action.type) {
        case SET_RANDOM_BREEDS:
            return [action.payload]
        
        case CORRECT_ANSWER:
            return [action.payload]

        default:
            return reduxState
    }
}

