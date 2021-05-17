import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';

import { BrowserRouter, Route, Switch, HashRouter } from 'react-router-dom';
import Welcome from './Pages/Welcome';
import Portal from './Pages/Portal'; 

ReactDOM.render(
<<<<<<< HEAD
  //   <BrowserRouter>
  //     <Switch>
  //       <Route exact path='/' component={Welcome}/>
  //       {/* <Route/> */}
  //     </Switch>
  //   </BrowserRouter>,

  <React.StrictMode>
    <HashRouter basename = {process.env.PUBLIC_URL}>
      <Switch>
        <Route exact path='/' component={Welcome} />
        <Route path='/Portal' component={Portal} />
      </Switch>
    </HashRouter>
  </React.StrictMode>, 
=======
  <BrowserRouter>
    <Switch>
      <Route exact path='/' component={Welcome}/>
    </Switch>
  </BrowserRouter>,
>>>>>>> 1a0f578e1082677a6a7510ba1e2d96a813864c6c
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
