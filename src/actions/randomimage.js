import * as request from 'superagent'

export function setRandomImage(url) {
    return {
        type: "SET_RANDOMIMAGE",
        payload: {
            random: url
        }
    }
}

export function getRandomImage(dispatch) {
    return function(dispatch) {
        request(`https://dog.ceo/api/breeds/image/random`)
        .then(response => {
            dispatch(setRandomImage(response.body.message))
        })
        
        
    }
}

export const SET_RANDOMIMAGE = "SET_RANDOMIMAGE"