import { SET_Q_AND_A } from '../actions/gameOne'

export default (reduxState = [], action = {}) => {
    switch (action.type) {
        case SET_Q_AND_A:
            return [
             ...action.payload.threeDogs.answers
            ]
        default:
            return reduxState
    }
}