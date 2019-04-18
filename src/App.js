import React, { Component } from 'react';
import logo from './logo.svg';
import NavBar from './components/navbar/navbar';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="container">
        <NavBar></NavBar>
      </div>
    );
  }
}

export default App;
