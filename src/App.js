import React, { Component } from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import NewUser from './components/pages/NewUser.js';
import NewSplash from './components/pages/NewSplash.js';
import './styles/App.scss';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={NewUser}/>
        <Route exact path="/new" component={NewSplash}/>
      </Switch>
    </div>
  );
}

export default App;
