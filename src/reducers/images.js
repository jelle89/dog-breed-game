import { SET_IMAGES } from '../actions/images'

export default (reduxState = [], action = {}) => {
    switch (action.type) {
        case SET_IMAGES:
            return [
                ...action.payload.images
            ]
        default:
            return reduxState
    }
}