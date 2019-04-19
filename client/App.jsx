import React, {useState, useEffect} from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Landing from './Components/Landing';
import Visualizer from './Components/Visualizer';
import NotFound from './Components/404';
import {JSON_STRING} from './IntroQuery'


const App = () => {
  const [schema, setSchema] = useState("");

  const handleUrlClick = (url) => {
    console.log('handleClick - clicked')
    fetch(url, {
      method: "POST",
      mode: "cors",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(JSON_STRING),
    })
    .then(res => res.json())
    .then(data => setSchema(data))
    .catch(err => console.log(`error: ${err}`))
  }

  return (
  <Router>
    <div>
      <Switch>
        <Route exact path="/" 
        render={(props) => <Landing handleUrlClick={handleUrlClick} />}
        />
        <Route path="/visualizer" component={Visualizer} />
        <Route component={NotFound} />
      </Switch>
    </div>
  </Router>
)};

export default App;