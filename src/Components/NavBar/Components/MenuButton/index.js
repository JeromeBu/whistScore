import React from "react";
import PropTypes from "prop-types";
import { Wrapper } from "./styled";
// import FontAwesome from "react-fontawesome"

const MenuButton = ({ showMenu, toogleMenu }) => (
  <Wrapper onClick={toogleMenu}>
    {showMenu ? (
      <div>
        <i className="fas fa-caret-right" />
        <p>Hide Menu</p>
      </div>
    ) : (
      <div>
        {/* <FontAwesome name="fas fa-bars" /> */}
        <i className="fas fa-bars" />
        {/* <p>Show Menu</p> */}
      </div>
    )}
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
