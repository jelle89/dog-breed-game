import { combineReducers } from 'redux'
import dogs from './dogs'
import images from './images'
import gameOne from './gameOne'


export default combineReducers({
    dogs,
    images,
    gameOne
})