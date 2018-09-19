import React from "react";
import App, { Lulu } from "./App";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import { createHistory as history } from "history";

const myRouter = () => (
  <Router history={history}>
    <React.Fragment>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/lulu">Topics</Link>
        </li>
      </ul>

      <hr />
      <App>
        <Switch>
          <Route path="/about" component={About} />
          <Route path="/lulu" component={Lulu} />
        </Switch>
      </App>
    </React.Fragment>
  </Router>
);

export default myRouter;

const Home = () => (
  <div>
    <h2>Home</h2>
  </div>
);

const About = () => (
  <div>
    <h2>About</h2>
  </div>
);
