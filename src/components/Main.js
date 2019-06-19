import React from 'react';
import About from './About';
import { Switch, Route } from 'react-router-dom';

const Main = () => (
    <Switch>
        <Route exact path ="/" component={About} />
        <Route path="/" component={About} />
    </Switch>
)

export default Main;