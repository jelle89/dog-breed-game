import { combineReducers } from 'redux'
import dogs from './dogs'
import images from './images'
import question from './question'

export default combineReducers({
    dogs,
    images,
    question
})