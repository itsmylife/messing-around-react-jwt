import App from 'components/App';
import Signup from 'components/auth/Signup';
import Welcome from 'components/Welcome';
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route } from 'react-router-dom';

ReactDOM.render(
  <BrowserRouter>
    <App>
      <Route exact path='/' component={ Welcome } />
      <Route path='/signup' component={ Signup } />
    </App>
  </BrowserRouter>,
  document.getElementById('root')
);
