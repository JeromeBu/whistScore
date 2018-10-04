import React from "react";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import { createHistory as history } from "history";
import App from "./App";
import SettingRules from "./Views/SettingRules";
import SettingPlayers from "./Views/SettingPlayers";
import Game from "./Views/Game";
import Home from "./Views/Home";

const myRouter = () => (
  <Router history={history}>
    <React.Fragment>
      <App>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/settingPlayers" component={SettingPlayers} />
          <Route path="/settingRules" component={SettingRules} />
          <Route path="/game" component={Game} />
        </Switch>
      </App>
    </React.Fragment>
  </Router>
);

export default myRouter;
