import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Provider } from "react-redux";
import configureStore from './store';
import './App.css';

const store = configureStore();
window.store = store;

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <div>
            <h1>HOLA</h1>
          </div>
        </Router>
      </Provider>
    );
  }
}

export default App;
