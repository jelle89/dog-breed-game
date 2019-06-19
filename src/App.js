import React from 'react';
import './App.css';
import store from './store';
import {Provider} from 'react-redux';
import {Route} from 'react-router-dom'
import DogListContainer from './components/DogListContainer';
import BreedImagesContainer from './components/BreedImagesContainer'
import HomePage from './components/HomePage';

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
            <Route exact path="/breeds/list" component={DogListContainer} />
            <Route exact path="/breeds/:breed" component={BreedImagesContainer} />
          </main>
        </div>
      </Provider>
    );
  }
}

export default App;
