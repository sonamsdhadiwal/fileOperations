import React from 'react';
import { Switch, Route } from 'react-router';
import About from './About'
import Projects from './Projects'
import Contact from './Contact'
import Mergepdf from './Mergepdf';
import Filesdragdrop from './Filesdragdrop';

const Routes = () => {
  return (
    <Switch>
      <Route path='/about' component = { About } />
      <Route path='/projects' component = { Projects } />
      <Route path='/contact' component = { Contact }/>
      <Route path='/dragdropfiles' component = { Filesdragdrop } />
      <Route path='/merge-pdf' component = {Filesdragdrop} />
      <Route path='/' component={ Projects } />
    </Switch>

  )
}
export default Routes