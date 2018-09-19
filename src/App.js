import React from "react";
import styled from "styled-components";
import { Button } from "@material-ui/core";
import { NavBar } from "./Components/NavBar";

const Wrapper = styled.div`
  padding: 0 5rem 5rem 5rem;
`;

const App = ({ children }) => (
  <React.Fragment>
    <NavBar>This is nav Bar</NavBar>
    {children}
  </React.Fragment>
);

export const Lulu = () => (
  <Wrapper>
    <Button variant="contained" color="primary">
      Some Button
    </Button>
  </Wrapper>
);

export default App;
