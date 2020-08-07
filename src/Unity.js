/**
 * The Router, which renders the appropriate page, and tracks page switches using Google Analytics.
 */

import React from 'react';

import {
  Home, About, Contact,
} from './templates';

import {
  HashRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';

import GA from './utils/GoogleAnalytics';

export default (props) => (
  <Router>
    { GA.init() && <GA.RouteTracker/>}
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
