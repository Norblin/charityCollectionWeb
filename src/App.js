import React from 'react';
import './scss/main.scss';
import Link from "react-router-dom";
import {HashRouter as Router, Route, Switch} from "react-router-dom";

import Home from '../src/components/Home'
import Login from './components/Login';
import Register from './components/Register';


function App (){
    return(
        <div className='appContainer'>
          <Router>
            <Switch>
              <Route exact path='/' component={Home}/>
              <Route path='/login' component={Login}/>
              <Route path='/Register' component={Register}/>
            </Switch>
          </Router>
        </div>
    );
}
export default App;

