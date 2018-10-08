import React from "react";
import { Button } from "@material-ui/core";
import { Link } from "react-router-dom";
import { Wrapper, Greetings } from "./styled";

const Home = () => (
  <Wrapper>
    <Greetings>Welcome to whist counting !</Greetings>
    <Button component={Link} to="/players" variant="contained" color="primary" fullWidth={false}>
      Start a Game
    </Button>
  </Wrapper>
);

export default Home;
