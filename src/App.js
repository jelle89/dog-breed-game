import React from 'react';
import './App.css';
import store from './store';
import {Provider} from 'react-redux';
import {Route} from 'react-router-dom'
import DogListContainer from './components/DogListContainer';
import BreedImagesContainer from './components/BreedImagesContainer'
import HomePage from './components/HomePage';
import AnswersListContainer from './components/AnswersListContainer';
import GameOne from './components/GameOne'
import GameTwo from './components/GameTwo'
import RandomImageContainer from './components/RandomImageContainer'

class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <div className="App">
          <header className="App-header">
            <h1 className="App-title">Dog Breeds App</h1>
          </header>
          <main>
            <Route exact path="/" component={HomePage} />
            <Route exact path="/list" component={DogListContainer} />
            <Route exact path="/breed/:breed" component={BreedImagesContainer} />
            <Route exact path="/gametest" component={AnswersListContainer} />
            <Route exact path="/gameone" component={GameOne} />
            <Route exact path="/gametwo" component={GameTwo} />
            <Route exact path="/randomimage" component={RandomImageContainer} />
            
          </main>
        </div>
      </Provider>
    );
  }
}

export default App;
