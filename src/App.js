import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div>
        <section class="hero is-purple is-fullheight">
          {/* <!-- Hero head: will stick at the top --> */}
          <div class="hero-head">
            <nav class="navbar">
              <div class="container">
                <div class="navbar-brand">
                  <a class="navbar-item">
                    <img src="https://bulma.io/images/bulma-type-white.png" alt="Logo"/>
                  </a>
                  <span class="navbar-burger burger" data-target="navbarMenuHeroA">
                    <span></span>
                    <span></span>
                    <span></span>
                  </span>
                </div>
                <div id="navbarMenuHeroA" class="navbar-menu">
                  <div class="navbar-end">
                    <a class="navbar-item is-active">
                      Home
                    </a>
                    <a class="navbar-item">
                      Examples
                    </a>
                    <a class="navbar-item">
                      Documentation
                    </a>
                    <span class="navbar-item">
                      <a class="button is-purple is-inverted">
                        <span class="icon">
                          <i class="fab fa-github"></i>
                        </span>
                        <span>Download</span>
                      </a>
                    </span>
                  </div>
                </div>
              </div>
            </nav>
          </div>

          {/* <!-- Hero content: will be in the middle --> */}
          <div class="hero-body">
            <div class="container has-text-centered">
              <h1 class="title">
                Title
              </h1>
              <h2 class="subtitle">
                Subtitle
              </h2>
            </div>
          </div>

          {/* {<!-- Hero footer: will stick at the bottom -->} */}
          <div class="hero-foot">
            <nav class="tabs">
              <div class="container">
                <ul>
                  <li class="is-active"><a>Overview</a></li>
                  <li><a>Modifiers</a></li>
                  <li><a>Grid</a></li>
                  <li><a>Elements</a></li>
                  <li><a>Components</a></li>
                  <li><a>Layout</a></li>
                </ul>
              </div>
            </nav>
          </div>
        </section>
        <section class="hero is-dark  is-fullheight">
          <div class="hero-head">
          <header class="navbar">
      <div class="container">
        <div class="navbar-brand">
          <a class="navbar-item">
            Guitart
          </a>
          <span class="navbar-burger burger" data-target="navbarMenuHeroC">
            <span></span>
            <span></span>
            <span></span>
          </span>
        </div>
        <div id="navbarMenuHeroC" class="navbar-menu">
          <div class="navbar-end">
            <a class="navbar-item is-active">
              Home
            </a>
            <a class="navbar-item">
              Examples
            </a>
            <a class="navbar-item">
              Documentation
            </a>
            <span class="navbar-item">
              <a class="button is-dark is-inverted">
                <span class="icon">
                  <i class="fab fa-github"></i>
                </span>
                <span>Download</span>
              </a>
            </span>
          </div>
        </div>
      </div>
    </header>
          </div>
          <div class="hero-body"></div>
          <div class="hero-foot"></div>
        </section>
      </div>
    );
  }
}

export default App;
