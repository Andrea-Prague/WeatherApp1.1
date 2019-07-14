import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import WeatherApp from './Pages/WeatherApp';
import Forecast from './Pages/Forecast';
import NotFound from './Pages/NotFound';

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
