import React from "react";
import PropTypes from "prop-types";
import { Wrapper, Spacer, Logo, ItemsWrapper } from "./styled";
import NavBarItem from "./NavBarItem";
import MenuButton from "./MenuButton";

const NavBarLayout = ({ items, showMenu, toogleMenu, hideMenu }) => (
  <React.Fragment>
    <Wrapper>
      <Logo src="images/logo.png" alt="logo" />
      <MenuButton showMenu={showMenu} toogleMenu={toogleMenu} />
      <ItemsWrapper showMenu={showMenu}>
        {items.map(element => (
          <NavBarItem
            key={element.title}
            route={element.route || "#"}
            icon={element.icon}
            disabled={element.disabled}
            hideMenu={hideMenu}
          >
            {element.title}
          </NavBarItem>
        ))}
      </ItemsWrapper>
    </Wrapper>
    <Spacer className="spacer" />
  </React.Fragment>
);

NavBarLayout.propTypes = {
  items: PropTypes.arrayOf(PropTypes.object).isRequired,
  showMenu: PropTypes.func.isRequired,
  hideMenu: PropTypes.func.isRequired,
  toogleMenu: PropTypes.func.isRequired,
};

export default NavBarLayout;
