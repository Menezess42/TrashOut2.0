import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import index from './Home';
import cadUsu from './cadUsu';
import cadEmp from './cadEmp';
import loginEmp from './loginEmp'
import loginUsu from './loginUsu'
import telaUsu from './telaLoginUsu'
import telaEmp from './telaEmp'
import cadColeta from './cadColeta'
import cadEco from './cadEco'
import telaUsuColeta from './telaUsuCol'

export default function Routes() {
    return (
      <BrowserRouter>
        <Switch>
          <Route path="/" exact={true} component={index}/>
          <Route path="/cadUsu"  component={cadUsu}/>
          <Route path="/cadEmp" component={cadEmp}/>
          <Route path="/loginEmp" component={loginEmp}/>
          <Route path="/loginUsu" component={loginUsu}/>
          <Route path="/telaUsu" component={telaUsu}/>
          <Route path='/telaEmp' component={telaEmp}/>
          <Route path='/cadColeta' component={cadColeta}/>
          <Route path='/cadEco' component={cadEco}/>
          <Route path='/telaUsuColeta' component={telaUsuColeta}/>
        </Switch>
      </BrowserRouter>
    );
  }