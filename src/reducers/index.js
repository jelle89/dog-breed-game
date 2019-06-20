import { combineReducers } from 'redux'
import dogs from './dogs'
import images from './images'
import randomimage from './randomimage'


export default combineReducers({
    dogs,
    images,
    randomimage
})