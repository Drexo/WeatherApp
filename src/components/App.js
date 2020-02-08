import React, { Component } from 'react';
import Form from './Form';
import Random from './Random';
import './App.css';

class App extends React.Component {

  state = {
    value: 'ddass'
  };

  render() {
    return (
      <div className="App">
        <Form value={this.state.value}/>
        <Random />
      </div>
    );
  }
}

export default App;
