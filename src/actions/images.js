import * as request from 'superagent'

export function setImages(arrayOfImages) {
    return {
        type: "SET_IMAGES",
        payload: {
            images: arrayOfImages
        }
    }
}

export function getImagesByBreed(breed) {
    return function(dispatch) {
        request(`https://dog.ceo/api/breed/${breed}/images`)
        .then(response => {
            console.log("RESPONSE", response.body.message)
            dispatch(setImages(response.body.message)) //object props or array?
        })
    }
}

export const SET_IMAGES = "SET_IMAGES"