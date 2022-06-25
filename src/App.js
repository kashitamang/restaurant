//styles
import './App.css';
//libraries
import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect
} from 'react-router-dom';
import { useState } from 'react';
import { client } from './services/client';

//services
// **** import { logout } from './services/fetch-utils';
//***then add to onclick on logout button */

//components
import HomePage from './components/HomePage';
import ListPage from './components/ListPage';
import CreatePage from './components/CreatePage';
import UpdatePage from './components/UpdatePage';

export default function App() {
  const [user, setUser] = useState(client.auth.user());

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
            {
              !user 
                ? <HomePage setUser={setUser} />
                : <Redirect to="/list" />
            }
          </Route>
          <Route exact path='/list'>
            {
              !user 
                ? <ListPage setUser={setUser} />
                : <Redirect to="/list" />
            }
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