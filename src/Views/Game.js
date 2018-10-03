import React from "react";
import styled from "styled-components";
import { Button } from "@material-ui/core";

const Wrapper = styled.div`
  background-color: grey;
`;

const Game = () => (
  <Wrapper>
    This is the Game view
    <Button variant="contained" color="primary">
      Push the Button
    </Button>
  </Wrapper>
);

export default Game;
