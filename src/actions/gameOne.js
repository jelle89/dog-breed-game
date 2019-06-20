import * as request from 'superagent'

export function selectAnswer(dogObject) {
    return {
        
    }
}

export function setQandA(threeDogObjects) {
    return {
        type: "SET_Q_AND_A",
        payload: {
            threeDogs: threeDogObjects
        }
    }
}

export function createQandA(dogList) {
    const shuffledDogs = [...dogList].sort(() => 0.5 - Math.random());
    let selectedDogs = shuffledDogs.slice(0, 3);
    return {
        answers: selectedDogs,
        question: selectedDogs[0]
    }
}

export function getThreeDogs() {
    return function(dispatch, getState) {
        const state = getState();
        if (state.dogs.length == 0) {
            request('https://dog.ceo/api/breeds/list/all')
                .then(response => {
                    dispatch(createQandA(Object.keys(response.body.message)))
                })
        } else {
            createQandA(state.dogs)
        }
    }
}

export const SET_Q_AND_A = "SET_Q_AND_A"