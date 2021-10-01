import React from 'react';
import { Switch, Route } from 'react-router';
import About from './components/About';
import Contact from './components/Contact';
const Routes = () => {
  return (
    <Switch>
      <Route path='/' />
      <Route path='/about' component = { About } />
      <Route path='/contact' component = { Contact }/>
    </Switch>

  )
}
export default Routes