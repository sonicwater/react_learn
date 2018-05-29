import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(props,context){
    super();
    this.state = {
      list:"[1,2,3]"
    }
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome Sonic</h1>
        </header>
        <p className="App-intro">
          {this.state.list}
        </p>
      </div>
    );
  }
}

export default App;
