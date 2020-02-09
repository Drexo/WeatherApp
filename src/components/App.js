import React, { Component } from 'react';
import Form from './Form';
import Random from './Random';
import './App.css';

// api key
const ApiKey = '43c0f116b91eccd6601d20c2b247d848'

class App extends React.Component {

  state = {
    value: '',
    city: '',
    temp: '',
    country: '',
    err: false,
  };
  
  handleCity = e => {
    const API = `http://api.openweathermap.org/data/2.5/weather?q=${this.state.value}&appid=${ApiKey}&units=metric`;
  
    fetch(API)
    .then(response => {
      if(response.ok){
        console.clear();
        return response
      }
      throw Error("Nope")
    })
    .then(repsonse => repsonse.json())
    .then(data => {
      this.setState({
        err: false,
        temp: data.main.temp,
        city: this.state.value,
        country: data.sys.country
      })  
    })
    .catch(err => {
      console.log(err);
      this.setState(state => ({
        err: true,
        city: this.state.value
      }))
  })
  }
  handleInputChange = (e) => {
    this.setState({
      value: e.target.value
    }, this.handleCity)
  }

  render() {
    return (
      <div className="App">
        <Form value={this.state.value} change={this.handleInputChange} />
        <Random weather={this.state} />
      </div>
    );
  }
}

export default App;
