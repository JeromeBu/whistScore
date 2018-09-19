import React from "react";
import styled from "styled-components";
import { blue } from "@material-ui/core/colors";

const Wrapper = styled.div`
  background-color: ${blue.A100};
  width: 100%;
`;

export class NavBar extends React.Component {
  render() {
    return <Wrapper>{this.props.children}</Wrapper>;
  }
}
