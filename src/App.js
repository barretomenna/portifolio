import React, { Component } from 'react';
import { BrowserRouter, Route, Redirect } from 'react-router-dom';

import logo from './logo.svg';

import NavBar from './components/navbar/navbar';
import Sobre from './components/sobre/sobre';
import Skills from './components/skills/skills';

import './App.css';
import '../node_modules/nes.css/css/nes.min.css';

class App extends Component {
  render() {
    return (
      <div className="container">
        <BrowserRouter>
          <NavBar></NavBar>
          <div className="main">
            <Route  path="/" exact component={Sobre} />
            <Route path="/sobre" component={Sobre} />
            <Route path="/skills" component={Skills} />
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
