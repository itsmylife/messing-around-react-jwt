import App from 'components/App';
import Signup from 'components/auth/Signup';
import Welcome from 'components/Welcome';
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter, Route } from 'react-router-dom';
import { applyMiddleware, createStore } from 'redux';
import reduxThunk from 'redux-thunk';
import reducers from './reducers';


const store = createStore(
  reducers,
  {},
  applyMiddleware(reduxThunk)
);

ReactDOM.render(
  <Provider store={ store }>
    <BrowserRouter>
      <App>
        <Route exact path='/' component={ Welcome } />
        <Route path='/signup' component={ Signup } />
      </App>
    </BrowserRouter>
  </Provider>
  ,
  document.getElementById('root')
);
