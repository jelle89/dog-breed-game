import { GET_DOG_IMAGE } from '../actions/dogimage'


export default (reduxState=[] , action = {}) => {
    switch (action.type) {
        case GET_DOG_IMAGE:
            return
            [...action.payload]
        default:
        return reduxState
    }
}