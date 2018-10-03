import React from "react";
import { NavBar } from "./Components/NavBar";
import PropTypes from "prop-types";

const App = ({ children }) => (
  <React.Fragment>
    <NavBar>This is nav Bar</NavBar>
    {children}
  </React.Fragment>
);

App.propTypes = {
  children: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default App;
