import React from "react";
import PropTypes from "prop-types";
import { Wrapper, Spacer, Logo, ItemsWrapper } from "./styled";
import NavBarItem from "./NavBarItem";
import MenuButton from "./MenuButton";

const NavBarLayout = ({ refLinker, items, showMenu, toogleMenu, hideMenu }) => (
  <React.Fragment>
    <Wrapper innerRef={refLinker}>
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
    <Spacer />
  </React.Fragment>
);

NavBarLayout.propTypes = {
  items: PropTypes.arrayOf(PropTypes.object).isRequired,
  hideMenu: PropTypes.func.isRequired,
  refLinker: PropTypes.func.isRequired,
  showMenu: PropTypes.bool.isRequired,
  toogleMenu: PropTypes.func.isRequired,
};

export default NavBarLayout;
