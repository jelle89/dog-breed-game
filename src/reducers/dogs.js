import { SET_DOGS } from '../actions/dogs'

export default (reduxState = [], action = {}) => {
    switch (action.type) {
        case SET_DOGS:
            return [
                ...action.payload
            ]
        default:
            return reduxState
    }
}