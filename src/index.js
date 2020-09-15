import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {Route, Router} from 'react-router'
import createBrowserHistory from 'history/createBrowserHistory'
import About from './About'
import Menu from './Menu'
import Products from './Products'
import Contacts from './Contacts'
import Project from './Project'




const history = createBrowserHistory()
ReactDOM.render(
 
    <Router history={history}>
      <Menu/>
       <Route path='/' component={App} exact/>
       <Route path='/about' component={About} exact/>
       <Route path='/products' component={Products} exact/>
       <Route path='/contacts' component={Contacts} exact/>
       <Route path='/project' component={Project} exact/>
       <Contacts/>

     </Router>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
