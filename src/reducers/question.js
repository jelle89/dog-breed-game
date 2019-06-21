import { SET_QUESTION } from '../actions/dogs'

export default (reduxState = {}, action = {}) => {
    console.log('action test:', action)
    switch (action.type) {
        case SET_QUESTION:
            return action.payload

        default:
            return reduxState
    }
}

