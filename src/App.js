import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Error from './components/404pages/Error'
import UserList from './components/profile/UserList'
import UserProfile from './components/profile/UserProfile'
import Note from './components/notes/Note'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Switch>
        <Route path='/' component={UserList} />
        <Route path='/profile' component={UserProfile} />
        <Route path='/note' component={Note} />
        <Route component={Error}/>
      </Switch>  
      </BrowserRouter>
    </div>
  );
}

export default App;
