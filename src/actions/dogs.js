import * as request from 'superagent'

export const SET_DOGS = "SET_DOGS"
export const SET_QUESTION = "SET_QUESTION"

function setDogs(arrayOfDogs) {
    return {
        type: SET_DOGS,
        payload: arrayOfDogs
    }
}

function setQuestion (question) {
    return {
        type: SET_QUESTION,
        payload: question
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

function shuffle (array) {
    return [...array].sort(() => 0.5 - Math.random());
}

function createQuestion(dogs){
    const shuffledDogs = shuffle(dogs)
    let answers = shuffledDogs.slice(0, 3);

    const shuffledAnswers = shuffle(answers)
    const answer = shuffledAnswers[0]

    return { answers, answer }
}

export function makeQuestion () {
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
                    const question = createQuestion(dogs)

                    const { answer } = question
                    // ^^^ This is the same as writing:
                    // const answer = question.answer

                    const component = encodeURIComponent(answer)
                    console.log('component test:', component)
                    const url = `https://dog.ceo/api/breed/${component}/images/random`

                    request(url)
                        .then(response => {
                            console.log('response test:', response.body)
                            const { message } = response.body
                            // const messages = response.body.message
                            console.log('message test:', message)
                            question.image = message

                            const action = setQuestion(question)
                            dispatch(action)
                            // ^^^ Same as writing:
                            // dispatch(setQuestion(question))
                        })
                    console.log("questions and answers:", { ...question })
                    console.log('how', Object.keys(question))
                })
        } else {
            
            // dispatch a question and answer to redux here
            
    }
  }
}