import React from 'react';
import './App.css';
import { Layout, Header, Navigation, Drawer, Content, Grid } from 'react-mdl';
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
    </div>
  );
}

export default App;
