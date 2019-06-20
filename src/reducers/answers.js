import { SET_RANDOM_BREEDS } from '../actions/answers'

export default (reduxState = [], action = {}) => {
    switch (action.type) {
        case SET_RANDOM_BREEDS:
            return

        default:
            return reduxState
    }
}

