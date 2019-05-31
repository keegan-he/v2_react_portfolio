import React from 'react';
import logo from './logo.svg';
import './App.css';
import Particles from 'react-particles-js';

function App() {
  return (
    <div className="App">
      <header className="header">

        <img src={logo} className="logo" alt="logo" />
        <div className="part">
        <Particles
          params={{
            "particles": {
              "number": {
                "value": 600,
                "density": {
                  "enable": true,
                  "value_area": 1500
                }
              },
              "line_linked": {
                "enable": true,
                "opacity": 0.02
              },
              "move": {
                "direction": "right",
                "speed": 0.05
              },
              "size": {
                "value": 1
              },
              "opacity": {
                "anim": {
                  "enable": true,
                  "speed": 1,
                  "opacity_min": 0.05
                }
              }
            },
            "interactivity": {
              "events": {
                "onclick": {
                  "enable": true,
                  "mode": "push"
                }
              },
              "modes": {
                "push": {
                  "particles_nb": 1
                }
              }
            },
            "retina_detect": true
          }} />
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
