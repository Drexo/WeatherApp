import React, { Component } from 'react';
import Form from './Form';
import Random from './Random';
import './App.css';

class App extends React.Component {

  state = {
    value: '',
    city: '',
    temp: '',
    err: '',
  };
  
  handleCity = e => {
    e.preventDefault()
    const API = `http://api.openweathermap.org/data/2.5/weather?q=${this.state.value}&appid=43c0f116b91eccd6601d20c2b247d848`;
  
    fetch(API)
    .then(response => {
      if(response.ok){
        return response
      }
      throw Error("Nope")
    })
    .then(repsonse => repsonse.json())
    .then(data => console.log(data))
    .catch(err => console.log(err))

  }

  handleInputChange = (e) => {
    this.setState({
      value: e.target.value
    })
  }

  render() {
    return (
      <div className="App">
        <Form value={this.state.value} change={this.handleInputChange} submit={this.handleCity} />
        <Random />
      </div>
    );
  }
}

export default App;
