import React from 'react';
import Home from './containers/Home';
import About from './containers/About';
import Contact from './containers/Contact';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

export default (props) => (
  <Router>
        <Switch>
          <Route path="/" exact 
            render={props => (
              <Home {...props}/>
            )}
          />

          <Route path="/about" exact
            render={props => (
              <About {...props}/>
            )}
          />

        <Route path="/contact" exact
            render={props => (
              <Contact {...props}/>
            )}
          />
        </Switch>
      </Router>
);