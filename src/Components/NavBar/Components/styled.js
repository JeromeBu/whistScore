import styled from "styled-components";
// NavBar components

export const Wrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  font-size: ${({ theme }) => theme.fontSize};
  height: ${({ theme }) => theme.navBarHeight};
  display: flex;
  align-items: center;
  background-color: ${({ theme }) => theme.navBarBackgroundColor};

  @media screen and (max-width: ${({ theme }) => theme.tablettesBreakPoint}) {
    position: relative;
    justify-content: space-between;
  }
`;

export const ItemsWrapper = styled.ul`
  height: ${({ theme }) => theme.navBarHeight};
  display: flex;
  align-items: center;
  background-color: ${({ theme }) => theme.navBarBackgroundColor};
  transition: 0.25s ease-in-out;

  @media screen and (max-width: ${({ theme }) => theme.tablettesBreakPoint}) {
    /* width: ${props => (props.width ? `${(props.width / 12) * 100}%` : "100%")}; */
      position: absolute;
      right: 0;
      top: ${({ theme }) => theme.navBarHeight};
      flex-direction: column;
      align-items: flex-start;
      height: auto;
      max-width: ${({ theme }) => theme.menuMaxWidth};;
      background-color: ${({ theme }) => theme.navBarBackgroundColor};
      border-bottom-left-radius: 10px;
      right: ${({ theme, showMenu }) => (showMenu ? 0 : `-${theme.menuMaxWidth}`)};
  }

`;

export const Spacer = styled.div`
  width: "100%";
  height: ${({ theme }) => theme.navBarHeight};
  @media screen and (max-width: ${({ theme }) => theme.tablettesBreakPoint}) {
    display: none;
  }
`;

export const Logo = styled.img`
  height: 30px;
  padding: 0 10px;
`;
