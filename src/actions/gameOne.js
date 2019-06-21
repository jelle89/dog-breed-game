import * as request from 'superagent'

// export function selectAnswer(dogObject) {
//     console.log("1 THIS RUNS")
//     return {

//     }
// }

export function setQandA(message) {
    const keys = Object.keys(message)
    const QandA = createQandA(keys)
    console.log("2 THIS RUNS")
    console.log("THREEDOGOBJECTS",QandA)
    return {
        type: "SET_Q_AND_A",
        payload: {
            threeDogs: QandA
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
                    const action = setQandA(response.body.message)
                    dispatch(action)
                })
        } else {
            dispatch(setQandA(createQandA(state.dogs)))
        }
    }
}

export const SET_Q_AND_A = "SET_Q_AND_A"