import React from 'react';
import { render } from 'react-dom';
// import 'semantic-ui-css/semantic.min.css';
import App from './App';

if (module.hot) {
  module.hot.accept();
}

render(<App />, document.querySelector('#root'));
