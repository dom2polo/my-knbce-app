// src/App.js

import React from 'react';
import logo from './logo.svg';
import './App.scss';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <div className="container">
            <a className="navbar-brand" href="/">
              <img src={logo} className="App-logo" alt="logo" />
              Our Church
            </a>
            <button
              className="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#navbarNav"
              aria-controls="navbarNav"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav ml-auto">
                <li className="nav-item">
                  <a className="nav-link" href="#Welcome-section">
                    Welcome
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#Events-section">
                    Upcoming Events
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#Contact-section">
                    Contact Us
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>

        {/* The rest of your content */}
        <img src={logo} className="App-logo" alt="logo" />
        <h1>Welcome to Our Church</h1>
        <p>Join us in worship and fellowship.</p>
      </header>

      {/* The rest of your sections and footer */}
    </div>
  );
}

export default App;
