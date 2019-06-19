import React from 'react';
import './App.css';
import store from './store';
import {Provider} from 'react-redux';
import DogListContainer from './components/DogListContainer';

class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <div className="App">
          <header className="App-header">
            <h1 className="App-title">Dog Breeds App</h1>
          </header>
          <main>
          <DogListContainer />
          </main>
        </div>
      </Provider>
    );
  }
}

export default App;
