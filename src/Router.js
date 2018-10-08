import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { createHistory as history } from "history";
import App from "./App";
import Rules from "./Views/Rules";
import Players from "./Views/Players";
import Game from "./Views/Game";
import Home from "./Views/Home";

const myRouter = () => (
  <Router history={history}>
    <React.Fragment>
      <App>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/players" component={Players} />
          <Route path="/rules" component={Rules} />
          <Route path="/game" component={Game} />
        </Switch>
      </App>
    </React.Fragment>
  </Router>
);

export default myRouter;
