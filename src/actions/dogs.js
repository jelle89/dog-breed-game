import * as request from 'superagent'

export function setDogs(arrayOfDogs) {
    return {
        type: "SET_DOGS",
        payload: arrayOfDogs
    }
}

export function getDogs() {
    // console.log('getDogs test')
    return function(dispatch, getState) {
        // console.log('dispatch test:', dispatch)
        const state = getState();
        // console.log("STATE", state)
        if (!state.dogs.length) {
            request('https://dog.ceo/api/breeds/list/all')
                .then(response => {
                    // console.log('response test:', response)
                    dispatch(setDogs(Object.keys(response.body.message)))
                })
        }
    }
}


export const SET_DOGS = "SET_DOGS"