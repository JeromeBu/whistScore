import React from "react";
import PropTypes from "prop-types";
import NavBar from "./Components/NavBar";

const App = ({ children }) => (
  <React.Fragment>
    <NavBar />
    {children}
  </React.Fragment>
);

App.propTypes = {
  children: PropTypes.node.isRequired,
};

export default App;
