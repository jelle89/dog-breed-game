import { SET_Q_AND_A } from '../actions/gameOne'

export default (reduxState = [], action = {}) => {
    switch (action.type) {
        case SET_Q_AND_A:
            return [                                    // cannot be an object right?
             ...action.payload.threeDogs.answers,
             action.payload.threeDogs.question          // so cannot be ...action.payload.threeDogs --> because that is and object
            ]                                           /// why mky props on store called gameOne?
        default:
            return reduxState
    }
}