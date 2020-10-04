import React from 'react';
import {
  BrowserRouter as Router,
  HashRouter as Hash,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Users from "./containers/Users";
import Page404 from "./containers/404";
import UserDetails from "./containers/UserDetails";

function Blog() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/users">Users</Link>
            </li>
          </ul>
        </nav>
        <Switch>
          <Route path="/about" exact>
              Hello About
          </Route>
          <Route path="/users">
            <Users />
          </Route>
          <Route path="/people/:userId" exact>
            <UserDetails />
          </Route>
          <Route path="/" exact>
            Home
          </Route>
          <Route path='*'>
            <Page404 />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default Blog;
