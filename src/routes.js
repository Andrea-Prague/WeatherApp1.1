import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import WeatherApp from './Pages/weatherApp';
import Forecast from './Pages/forecast';
import NotFound from './Pages/notFound';

const Routes = (props) => (
  <Router {...props}>
    <Switch>
      <Route exact path='/' component={WeatherApp}/>
      <Route path='/forecast' component={Forecast} />
      <Route component={NotFound} />
    </Switch>
  </Router>
);

export default Routes;
