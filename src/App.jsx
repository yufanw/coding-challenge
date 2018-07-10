import React, { Component } from 'react';
import './App.css';
import Picker from './Picker';

export default class App extends Component {
  // Page to test Avatar Picker
  render() {
    return (
      <div className="page">
        <header>
          <div></div>
          <Picker className="picker"/>
          <div></div>
        </header>
        <div></div>
        <footer/>
      </div>
    );
  }
}
