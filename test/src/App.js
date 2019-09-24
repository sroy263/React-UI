import logo from './logo.svg';
import './App.css';
import React, { Component } from 'react'
import Lol from './components/lol'
import player_test from './components/player_test'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Lol/>
        <player_test/>
      </header>
    </div>
  );
}

export default App;
