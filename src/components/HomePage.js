import React from 'react';
import {Link} from 'react-router-dom';
import './HomePage.css'

class HomePage extends React.Component {
  render() {
    return (
      <div className="homepage">
        <h1>Dog breed game</h1>
        <p>click the links below to memorize the dog breeds and play the games</p>
        <Link to="/list">Memorize dog breeds</Link>
        <Link to="/gameone">Guess the dog breed</Link>
      </div>
    );
  }
}

export default HomePage;