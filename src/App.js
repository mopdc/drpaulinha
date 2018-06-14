import React, { Component } from 'react';
import Console from './Console.js';
import SystemBar from './SystemBar.js';
import Countdown from './Countdown.js';
import ReactPlayer from 'react-player'
import foto from './foto.jpg'; // Tell Webpack this JS file uses this image

import './App.css';

class App extends Component {
  render() {
    return (
      <div className="Container">
          <h2>Contagem regressiva - CRM</h2>
          <Countdown date="2019-06-28T18:00:00" />
          <img className="Img" src={foto} />
      </div>
    );
  }
}

export default App;
