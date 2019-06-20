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
            dispatch(setImages(response.body.message))
            console.log(response.body.message)
        }) 
    }
}

export const SET_IMAGES = "SET_IMAGES"