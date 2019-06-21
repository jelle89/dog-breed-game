import { combineReducers } from 'redux'
import dogs from './dogs'
import images from './images'
import question from './question'
import randomimage from './randomimage'

export default combineReducers({
    dogs,
    images,
    question,
    randomimage
})