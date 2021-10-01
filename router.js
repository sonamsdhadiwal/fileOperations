import React from 'react';
import { Switch, Route } from 'react-router';
import About from './src/components/About'
import Contact from './src/components/Contact';
export default (
    <Switch>
        <Route exact path='/' />
        <Route path='/' />
        <Route path='/about' component = { About } />
        <Route path='/contact' component = { Contact }/>
    </Switch>
)
