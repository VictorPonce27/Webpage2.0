import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';

import {Route, Switch, HashRouter } from 'react-router-dom';
import Welcome from './Pages/Welcome';
import Portal from './Pages/Portal'; 
import UserProfile from './Pages/UserProfile';
import GuardedRoute from './GuardedRoute'
import Admin from './Pages/Admin';
    
ReactDOM.render(

  <React.StrictMode>
    <HashRouter basename = {process.env.PUBLIC_URL}>
      <Switch>
        <Route exact path='/' component={Welcome}/>
        <GuardedRoute path='/Portal' component={Portal} auth={true}/>
        <GuardedRoute path='/UserProfile' component={UserProfile} auth={true}/>
        <GuardedRoute path='/Admin' component={Admin} auth={true} />
      </Switch>
    </HashRouter>
  </React.StrictMode>, 

  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
