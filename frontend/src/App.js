import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Provider } from "react-redux";
import configureStore from './store';

import Raiz from './containers/App'
import Pedidos from './containers/Pedidos';

const store = configureStore();
window.store = store;

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
        <div>
            <Switch>
              <Route exact path="/" component={Raiz}  />
              <Route exact path="/PEDIDOS" component={Pedidos} />
            </Switch>
        </div>
        </Router>
      </Provider>
    );
  }
}

export default App;
