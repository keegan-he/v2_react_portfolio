import React from 'react';
import About from './About';
import Photography from './Photography';
import Contact from './Contact';
import Projects from './Projects';
import { Switch, Route } from 'react-router-dom';

const Main = () => (
    <Switch>
        <Route exact path ="/" component={null} />
        <Route path="/about" component={About} />
        <Route path="/photography" component={Photography} />
        <Route path="/contact" component={Contact} />
        <Route path="/projects" component={Projects} />
    </Switch>
)

export default Main;