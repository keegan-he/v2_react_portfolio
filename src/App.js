import React from 'react';
import './App.css';
import Particles from 'react-particles-js';

function App() {
  return (
	<div className="App">
      <header className="header">

        <div className="part">
          </div>
        <h1>
          Hello, <br ></br>
          I'm Keegan Helmbrecht.
        </h1>
        <div className="sub">
          I'm a full stack developer living in the Bay Area.
        </div>
        <div className="p">
          Technical Expertise: <br ></br>
          Python - React.js - JavaScript (ES6) - HTML / CSS - Django - Postgres SQL - Bash - Git - Pipenv - React Router - FlexBox & Grid - BEM - MVC - OOP - API engineering - ORM - OOP - Static Site Generation - SPA (Single Page Apps) - Webpack - Test Driven Development - Bootstrap - Agile
        </div>
        <a
          className="link"
          href="https://www.linkedin.com/in/keegan-helmbrecht/"
          target="_blank"
          rel="noopener noreferrer"
        >
          LinkedIn
        </a>
      </header>
    </div>
  );
}

export default App;
