import React from 'react';
import {
  BrowserRouter as Router,
  HashRouter as Hash,
  Switch,
  Route,
  Link, NavLink
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
              <NavLink exact activeClassName='active' to="/">Home</NavLink>
            </li>
            <li>
              <NavLink exact activeClassName='active' to="/about">About</NavLink>
            </li>
            <li>
              <NavLink activeClassName='active' to="/users">Users</NavLink>
            </li>
          </ul>
        </nav>
        <Switch>
          <Route path="/" exact>
            Home
          </Route>
          <Route path="/about" exact>
              Hello About
          </Route>
          <Route path="/users">
            <Users />
          </Route>
          <Route path="/people/:userId" exact>
            <UserDetails />
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
