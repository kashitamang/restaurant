//styles
import './App.css';
//libraries
import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom';
// *** import { useState } from 'react';

//services
// **** import { logout } from './services/fetch-utils';
//***then add to onclick on logout button */

//components
import HomePage from './components/HomePage';
import ListPage from './components/ListPage';
import CreatePage from './components/CreatePage';
import UpdatePage from './components/UpdatePage';

export default function App() {
  return (
    <Router>
      <header>
        <nav>
          <ul>
            <li>
              <Link to="/list">List Page</Link>
            </li>
            <li>
              <Link to="/create">Create Page</Link>
            </li>
            <button to="/users">Logout</button>
          </ul>
        </nav>
        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route exact path='/'>
            <HomePage />
          </Route>
          <Route exact path='/list'>
            <ListPage />
          </Route>
          <Route exact path='/create'>
            <CreatePage />
          </Route>
          <Route exact path='/update/:id'>
            <UpdatePage />
          </Route>
        </Switch>
      </header>
    </Router>
  );
}