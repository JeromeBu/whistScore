/* eslint-disable import/prefer-default-export */
import styled from "styled-components";
// MenuButton components

export const Wrapper = styled.div`
  font-size: 1.2em;
  color: ${props => props.theme.fontColor};
  max-width: 150px;
  text-align: right;
  padding: 0 10px;
  display: flex;
  align-items: center;
  line-height: ${({ theme }) => theme.navBarHeight};
  height: ${({ theme }) => theme.navBarHeight};
  cursor: pointer;

  @media screen and (min-width: ${props => props.theme.tablettesBreakPoint}) {
    display: none;
  }
`;

const pVertic = 0.6;
const pHoriz = 0.8;
const hBar = 0.2;

export const BarWrapper = styled.div`
  width: calc(${pHoriz} * ${({ theme }) => theme.navBarHeight});
  height: calc(${pVertic} * ${({ theme }) => theme.navBarHeight});
  position: relative;
  transform: rotate(0deg);
  transition: 0.5s ease-in-out;
  text-align: right;
`;

export const Bar = styled.span`
  display: block;
  position: absolute;
  height: calc(${hBar * pVertic} * ${({ theme }) => theme.navBarHeight});
  width: 100%;
  background: ${({ theme }) => theme.fontColor};
  border-radius: calc(${pVertic / 2 - (pVertic * hBar) / 2} * ${({ theme }) => theme.navBarHeight});
  opacity: 1;
  left: 0;
  transform: rotate(0deg);
  transition: 0.25s ease-in-out;
  ${({ position, showMenu }) => !showMenu && position === "top" && "top: 0;"}
  ${({ position, showMenu, theme }) => !showMenu
    && position === "middle"
    && `top: calc(${pVertic / 2 - (pVertic * hBar) / 2} * ${theme.navBarHeight});`}
  ${({ position, showMenu }) => !showMenu && position === "bottom" && "bottom: 0"}
  ${({ position, showMenu, theme }) => showMenu
    && position === "top"
    && `top: calc(${pVertic / 2 - (pVertic * hBar) / 2} * ${theme.navBarHeight});;
    transform: rotate(135deg);`}
  ${({ position, showMenu, theme }) => showMenu
    && position === "middle"
    && `top: calc(${pVertic / 2 - (pVertic * hBar) / 2} * ${theme.navBarHeight});;
    opacity: 0;
    left: -50px;`}
  ${({ position, showMenu, theme }) => showMenu
    && position === "bottom"
    && `bottom: calc(${pVertic / 2 - (pVertic * hBar) / 2} * ${theme.navBarHeight});
    transform: rotate(-135deg);`}
`;
