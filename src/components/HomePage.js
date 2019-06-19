import React from 'react';
import {Link} from 'react-router';

class HomePage extends React.Component {
  render() {
    return (
      <div className="homepage">
        <h1>Dog breed game</h1>
        <p>click the links below to memorize the dog breeds and play the games</p>
        <Link to="/breeds/list">Memorize dog breeds</Link>
      </div>
    );
  }
}

export default HomePage;