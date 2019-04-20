import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import logo from './logo.svg';

import NavBar from './components/navbar/navbar';
import Sobre from './components/sobre/sobre';

import './App.css';
import '../node_modules/nes.css/css/nes.min.css';

class App extends Component {
  render() {
    return (
      <div className="container">
        <NavBar></NavBar>
        <div className="main">
          <BrowserRouter>
            <Route path="/" component={Sobre} />
          </BrowserRouter>
        </div>
      </div>
    );
  }
}

export default App;
