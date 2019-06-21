import React from 'react'
import { Link } from 'react-router-dom'


export default class GameTwo extends React.Component {
    render() {
        console.log('start')

        return(
        <div>
            <Link to='/'>Go to hompage</Link>
        </div>
        )
    }

}
