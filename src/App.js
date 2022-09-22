import Appbar from './components/Appbar'
import Elevator from './components/Elevator'
import './App.css';
import React, { Component } from 'react';

function App() {
  return (
    <div className="App">
      <Appbar/>
      <Elevator/>
    </div>
  );
}

export default App;
