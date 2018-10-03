import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { Wrapper } from "./styled";

// export const NavBarItem = props => (
const NavBarItem = ({ disabled, route, icon, hideMenu, children }) => (
  <Wrapper disabled={disabled} onClick={hideMenu}>
    <Link to={route}>
      {icon && <i className={icon} />}
      {children}
    </Link>
  </Wrapper>
);

NavBarItem.defaultProps = {
  icon: null,
  disabled: false,
};

NavBarItem.propTypes = {
  icon: PropTypes.string,
  children: PropTypes.node.isRequired,
  route: PropTypes.string.isRequired,
  hideMenu: PropTypes.func.isRequired,
  disabled: PropTypes.bool,
};

export default NavBarItem;
