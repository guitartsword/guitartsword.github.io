import React, { Component } from 'react';
import './App.css';
import BulmaHero from './BulmaComponents/Hero';
import BulmaNav from './BulmaComponents/Navbar';
class App extends Component {
  render() {
    return (
      <div>
        <BulmaNav fixed="top" color="primary" variation="dark" hasBurger></BulmaNav>
        <BulmaHero></BulmaHero>
        <BulmaHero></BulmaHero>
        <BulmaNav fixed="bottom" color="primary" variation="light"></BulmaNav>

      </div>
    );
  }
}

export default App;
