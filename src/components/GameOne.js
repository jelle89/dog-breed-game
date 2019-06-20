import React from 'react'
import AnswersListContainer from './AnswersListContainer';


class GameOne extends React.Component {
    
    constructor(props) {
        console.log('props', props)
        super(props);
        this.state = {
            randomImage: {}
        }
    }
    
    componentDidMount() {
        fetch(`https://dog.ceo/api/breeds/image/random`)
        .then(res => res.json())
        .then(data => this.setState({ randomImage: data.message }))   
    }
   

    render() {
        console.log('this state',this.state)
        const randomImg = this.state.randomImage
        
        return (
        <div className="gameOneImage">
            <h1>What breed is this dog?</h1>
            <img src={randomImg} alt="Img" key={randomImg} />
            <AnswersListContainer />
        </div>
        )
    }
}


export default GameOne