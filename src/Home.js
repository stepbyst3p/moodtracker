import React, { Component } from 'react';
import Menu from './components/Menu';
import './App.css';

class Home extends Component {
  render() {
    return (
      <div className="App">
        <div className="ask-mood">
          <div className="ask-mood-header">
            How are you feeling now?
          </div>
          <div className="mood-form-group">
            <input type="text" autoFocus className="mood-input" />
          </div>
        </div>
        <Menu />
      </div>
    );
  }
}

export default Home;
