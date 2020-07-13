import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

export default (props) => (
  <Router>
        { GA.init() && <GA.RouteTracker /> }
        <ScrollToTop />
        {
          showNotification &&
          <LeavingSite location={loc} leftSite={leftSite}/>
        }
        
        <Switch>
          <Route path="/" exact 
            render={props => (
              <Splash {...props} />
            )}
          />
          
          <Route path="/en-US/start-here" exact>
            <Redirect to="/start-here" />
          </Route>
          {
            LANGUAGES.map(
              item => item.lang !== 'en' 
                ? <Route 
                    key={`${item.lang}-home`} path={`/${item.lang}/start-here`} exact 
                    render={props => { 
                      return (
                      <Home {...props} {...props.match.params} slug={`homepage-${item.lang}`} language={item} />
                    )}} 
                  /> 
                : <Route path="/start-here" exact 
                  render={props => (
                    <Home {...props} {...props.match.params} slug="homepage" language={item}  />
                  )} 
                />
            )
          }
          {/** Pages + i18n */}
          {
            LANGUAGES.map(
              item => item.lang !== 'en' 
                ? <Route key={`${item.lang}-page`} 
                    path={`/${item.lang}/:slug`} 
                    exact
                    render={props => (
                      <Page {...props} {...props.match.params} language={item} />
                    )} /> 
                : <Route path="/:slug" exact 
                  render={props => (
                    <Page {...props} {...props.match.params} language={item} />
                  )} 
                />
            )
          }
          
          <Route path="/post/:slug" render={props => (<Post {...props} {...props.match.params} />)} />
        </Switch>
      </Router>
);