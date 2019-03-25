import React from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import App from './App';
import Home from './Home';
// import Contact from './Contact';
import NotFound from './NotFound';

export default () => {
  return (
    <Router>
      <Switch>
        <App>
          <Route path='/'  component={Home} /> 
          {
            //<Route path='/contact' exact component={Contact} />
            // <Route component={NotFound} />
          }
        </App>  
      </Switch>
    </Router>
  );
};
