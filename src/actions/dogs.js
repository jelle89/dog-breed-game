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

// function createQuestionAndAnswers(dogs){
//     // Shuffle array
//     const shuffledDogs = [...dogs].sort(() => 0.5 - Math.random());

//     // Get sub-array of first n elements after shuffled
//     let selectedDogs = shuffledDogs.slice(0, 3);

//     console.log(shuffledDogs)
//     console.log(selectedDogs)

//     return {
//         answers: selectedDogs,
//         question: selectedDogs[Math.floor(Math.random() * selectedDogs.length)]     
//     }
// }

export function generateQuestionAndAnswers(){
    
    return function(dispatch, getState) {
        // console.log('dispatch test:', dispatch)
        const state = getState();
        // console.log("STATE", state)
        if (state.dogs.length === 0) {
            request('https://dog.ceo/api/breeds/list/all')
                .then(response => {
                    // console.log('response test:', response)
                    const dogs = Object.keys(response.body.message)
                    dispatch(setDogs(dogs))

                    // dispatch a question and answer to redux
                    
                })
        } else {
            // dispatch a question and answer to redux here
        }
    }
}


export const SET_DOGS = "SET_DOGS"