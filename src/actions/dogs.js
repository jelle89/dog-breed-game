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

export function createQuestionAndAnswers(dogs){
    const shuffledDogs = [...dogs].sort(() => 0.5 - Math.random());
    let selectedDogs = shuffledDogs.slice(0, 3);
    
    return {
        answers: selectedDogs,
        question: selectedDogs    
    }
}

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
                    console.log(createQuestionAndAnswers(dogs))
                })
        } else {
            
            // dispatch a question and answer to redux here
            
    }
  }
}

export function getCorrectAnswer() {
    
    // if(this.props.answer === this.state.randomImage) {
    //     return 
    // }

}


export const SET_DOGS = "SET_DOGS"