import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import Home from './Home';

class App extends Component {
  render() {
    return (
      <Router>
          <Switch>
              <Route path="/home" component={Home} />
              <Redirect to="/home" />
          </Switch>
      </Router>
    );
  }
}

export default App;
