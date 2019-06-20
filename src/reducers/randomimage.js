import { SET_RANDOMIMAGE } from '../actions/randomimage'

export default (reduxState = [], action={}) => {
    switch (action.type) {
        case SET_RANDOMIMAGE:
            return [
                action.payload.random
            ]
        default:
            return reduxState
    }
}