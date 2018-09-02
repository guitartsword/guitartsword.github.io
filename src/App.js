import React, { Component } from 'react';
import './App.css';
import BulmaHero from './BulmaComponents/Hero';
import BulmaNav from './BulmaComponents/Navbar';
class App extends Component {
  render() {
    return (
      <div>
        <BulmaNav fixed="top" color="purple" variation="dark" hasBurger></BulmaNav>
        <BulmaHero color="purple"></BulmaHero>
        <BulmaNav fixed="bottom" color="purple" variation="light"></BulmaNav>

      </div>
    );
  }
}

export default App;
