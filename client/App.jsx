import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Landing from './Components/Landing';
import Visualizer from './Components/Visualizer';
import NotFound from './Components/404';

const App = () => (
  <Router>
    <div>
      <Switch>
        <Route exact path="/" component={Landing} />
        <Route path="/visualizer" component={Visualizer} />
        <Route component={NotFound} />
      </Switch>
    </div>
  </Router>
);

export default App;