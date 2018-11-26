import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Provider } from "react-redux";
import configureStore from './store';

import Raiz from './containers/App'

const store = configureStore();
window.store = store;

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <Raiz />
        </Router>
      </Provider>
    );
  }
}

export default App;
