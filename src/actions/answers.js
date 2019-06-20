
export function getCorrectAnswer(correctA) {
    return {
        type: "CORRECT_ANSWER",
        payload: {
            correctAnswer: correctA
        }
    }
}

export function setRandomBreeds(wronga1, wronga2) {
    return {
        type: "SET_RANDOM_BREEDS",
        payload: {
            wrongAnswerOne: wronga1,
            wrongAnswerTwo: wronga2
        }
    }
}

export function getRandomBreeds() {
    return function(dispatch, getState){
        const state = getState();
        console.log("DOG LIST?:", state.dogs)
    
    }
}

export const SET_RANDOM_BREEDS = "SET_RANDOM_BREEDS"
export const CORRECT_ANSWER = "CORRECT_ANSWER"
