/* eslint-disable import/prefer-default-export */
import styled from "styled-components";
// NavBarItem components

export const Wrapper = styled.li`
  padding: 0 1em;

  a {
    line-height: ${props => props.theme.navBarHeight};
    color: ${props => props.theme.fontColor};
    opacity: ${props => (props.disabled ? "0.4" : "0.8")};
    ${props => !props.disabled
      && `&:hover {
        opacity: 1;
        cursor: pointer;
      }`};
  }
  @media screen and (max-width: ${props => props.theme.tablettesBreakPoint}) {
    display: block;
    height: ${props => props.theme.navBarHeight};
    width: 100%;
    line-height: ${props => props.theme.navBarHeight};
    border-top: 0.5px solid ${props => props.theme.fontColor};
    a {
      display: block;
      width: 100%;
      padding-right: 2em;
    }
  }
`;
