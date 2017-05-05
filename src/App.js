import React, { Component } from 'react';
import './App.css';
import Header from './Header';
import BottomNav from './BottomNav';

class App extends Component {
  render() {
    return (
      <div className="">
        <Header />
        <BottomNav />
      </div>
    );
  }
}

export default App;
