/* eslint-disable import/prefer-default-export */
import styled from "styled-components";
// MenuButton components

export const Wrapper = styled.div`
  font-size: 1.2em;
  color: ${props => props.theme.fontColor};
  max-width: 150px;
  text-align: right;
  padding: 0 20px;
  display: flex;
  align-items: center;
  line-height: ${props => props.theme.navBarHeight};
  height: ${props => props.theme.navBarHeight};

  &:hover {
    color: ${props => props.theme.linkHoverColor};
    cursor: pointer;
  }

  /* .hidden {
    visibility: hidden;
  } */

  @media screen and (min-width: ${props => props.theme.tablettesBreakPoint}) {
    display: none;
  }
`;

export const BarWrapper = styled.div`
  width: 60px;
  height: 45px;
  position: relative;
  transform: rotate(0deg);
  transition: 0.5s ease-in-out;
  cursor: pointer;
  text-align: right;
`;

export const Bar = styled.span`
  display: block;
  position: absolute;
  height: 9px;
  width: 100%;
  background: #d3531a;
  border-radius: 9px;
  opacity: 1;
  left: 0;
  transform: rotate(0deg);
  transition: 0.25s ease-in-out;
  ${({ position, showMenu }) => !showMenu && position === "top" && "top: 0px"}
  ${({ position, showMenu }) => !showMenu && position === "middle" && "top: 18px"}
  ${({ position, showMenu }) => !showMenu && position === "bottom" && "top: 36px"}
  ${({ position, showMenu }) => showMenu
    && position === "top"
    && `top: 18px;
    transform: rotate(135deg);`}
  ${({ position, showMenu }) => showMenu
    && position === "middle"
    && `top: 18px;
    opacity: 0;
    left: -60px;`}
  ${({ position, showMenu }) => showMenu
    && position === "bottom"
    && `top: 18px;
    transform: rotate(-135deg);`}
`;
