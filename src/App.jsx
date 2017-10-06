import React, { Component } from 'react';
import './App.css';
import Header from './components/Header/Header';
import TeslaBattery from './containers/TeslaBattery';

const counterDefaultVal = {
  speed: {
    title: "Speed",
    unit: "mph",
    min: 45,
    max: 70,
    step: 5,
  },
  temperature: {
    title: "Outside Temperature",
    unit: "°",
    min: -10,
    max: 40,
    step: 10,
  },
};

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <TeslaBattery counterDefaultVal={counterDefaultVal} />
      </div>
    );
  }
}

export default App;
