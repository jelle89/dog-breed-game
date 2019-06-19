import * as request from 'superagent'


export default function dogImage () {

    request(`https://dog.ceo/api/breed/${encodeURIComponent(breed)}/images`)
    .then(data => console.log(data.body))
    .catch(err => console.log(err))
}

export function getDogImage(dogimages) {
    return {
        type: "GET_DOG_IMAGE",
        payload: dogimages
    }
}

export const GET_DOG_IMAGE = "GET_DOG_IMAGE"