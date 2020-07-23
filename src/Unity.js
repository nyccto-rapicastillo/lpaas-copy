import React from 'react';

import {
  Home, About, Contact,
} from './templates';

import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';

export default (props) => (
  <Router>
    <Switch>
      <Route path="/" exact
        render={(props) => (
          <Home/>
        )}
      />

      <Route path="/about" exact
        render={(props) => (
          <About/>
        )}
      />

      <Route path="/contact" exact
        render={(props) => (
          <Contact/>
        )}
      />
    </Switch>
  </Router>
);
