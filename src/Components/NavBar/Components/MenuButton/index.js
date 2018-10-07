import React from "react";
import PropTypes from "prop-types";
import { Wrapper, Bar, BarWrapper } from "./styled";

const MenuButton = ({ showMenu, toogleMenu }) => (
  <Wrapper onClick={toogleMenu}>
    <BarWrapper>
      <Bar position="top" showMenu={showMenu} />
      <Bar position="middle" showMenu={showMenu} />
      <Bar position="bottom" showMenu={showMenu} />
    </BarWrapper>
  </Wrapper>
);

MenuButton.defaultProps = {
  showMenu: false,
};

MenuButton.propTypes = {
  showMenu: PropTypes.bool,
  toogleMenu: PropTypes.func.isRequired,
};

export default MenuButton;
