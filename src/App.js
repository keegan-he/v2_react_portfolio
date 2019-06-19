import React from 'react';
import './App.css';
import { Layout, Header, Navigation, Drawer, Content } from 'react-mdl';
import Main from './components/Main.js';
import { Link } from 'react-router-dom';


function App() {
  return (
  <div className="App">
  <div className="demo-big-content">
    <Layout>
        <Header title="Welcome" scroll>
            <Navigation>
                <Link to="/about">About</Link>
                <Link to="/contact">Contact</Link>
                <Link to="/photography">Photography</Link>
                <Link to="projects">Projects</Link>
            </Navigation>
        </Header>
        <Drawer title="Home">
            <Navigation>
            <Link to="/about">About</Link>
            <Link to="/contact">Contact</Link>
            <Link to="/photography">Photography</Link>
            <Link to="projects">Projects</Link>
            </Navigation>
        </Drawer>
        <Content>
            <div className="page-content" />
            <Main />
        </Content>
    </Layout>
</div>
      <header className="header">
        <div className="part">
          </div>
          
        <h1>
          Hello! <br ></br>
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
