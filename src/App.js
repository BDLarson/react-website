import React from 'react';
import logo from './images/self_image.jpg';
import './App.css';
require('typeface-great-vibes')

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="website logo" />
        <p 
          className="App-title"
        >
          I'm Blake.
        </p>
        <p 
          className="App-body"
        >
          a designer, programmer, and enthusiast.
        </p>
        <a
          className="App-link"
          href="https://github.com/blake417"
          target="_blank"
          rel="noopener noreferrer"
        >
          Github
        </a>
        <a
          className="App-link"
          href="https://www.linkedin.com/in/blake-d-larson/"
          target="_blank"
          rel="noopener noreferrer"
        >
          LinkedIn
        </a>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
