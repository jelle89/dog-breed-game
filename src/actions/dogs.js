import * as request from 'superagent'

export function setDogs(arrayOfDogs) {
    return {
        type: "SET_DOGS",
        payload: arrayOfDogs
    }
}

export function getDogs() {
    return function(dispatch) {
        request('https://dog.ceo/api/breeds/list/all')
        // request('https://dog.ceo/dog-api/documentation/')
            .then(response => {
                dispatch(setDogs(Object.keys(response.body.message)))
            })
    }
}

export const SET_DOGS = "SET_DOGS"