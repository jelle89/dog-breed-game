import * as request from 'superagent'


export default function dogImage(breed) {
    return function(dispatch) {
    request(`https://dog.ceo/api/breed/${encodeURIComponent(breed)}/images`)
    .then(response => console.log("WHAT IS THE RESPONSE?:", response.body.message))
    .catch(err => console.log(err))
    }
}

export function getDogImage(dogimages) {
    return {
        type: "GET_DOG_IMAGE",
        payload: dogimages
    }
}

export const GET_DOG_IMAGE = "GET_DOG_IMAGE"