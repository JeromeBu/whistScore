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
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/settingPlayers">Setting players</Link>
        </li>
        <li>
          <Link to="/settingRules">Setting rules</Link>
        </li>
        <li>
          <Link to="/game">Game</Link>
        </li>
      </ul>

      <hr />
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
