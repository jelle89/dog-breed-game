import * as request from 'superagent'

// export function selectAnswer(dogObject) {
//     console.log("1 THIS RUNS")
//     return {

//     }
// }

export function setQandA(threeDogObjects) {
    console.log("2 THIS RUNS")
    return {
        type: "SET_Q_AND_A",
        payload: {
            threeDogs: threeDogObjects
        }
    }
}

export function createQandA(dogs) {
    console.log("3 THIS RUNS")
    const shuffledDogs = [...dogs].sort(() => 0.5 - Math.random());
    let selectedDogs = shuffledDogs.slice(0, 3);
    return {
        answers: selectedDogs,
        question: selectedDogs[0]
    }
}

export function getThreeDogs() {
    console.log("4 THIS RUNS")
    return function(dispatch, getState) {
        const state = getState();
        if (state.dogs.length === 0) {
            request('https://dog.ceo/api/breeds/list/all')
                .then(response => {
                    dispatch(setQandA(createQandA(Object.keys(response.body.message))))
                })
        } else {
            dispatch(setQandA(createQandA(state.dogs)))
        }
    }
}

export const SET_Q_AND_A = "SET_Q_AND_A"