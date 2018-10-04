import React from "react";
import NavBarLayout from "../Components/NavBarLayout";

export default class NavBarContainer extends React.Component {
  state = {
    showMenu: false,
  };

  toogleMenu = () => {
    const { showMenu } = this.state;
    this.setState({
      showMenu: !showMenu,
    });
  };

  hideMenu = () => {
    this.setState({
      showMenu: false,
    });
  };

  render() {
    const infoForItems = [
      { icon: "fas fa-tachometer-alt", title: "Home", route: "/" },
      { title: "Players", route: "/settingPlayers" },
      { title: "Rules", route: "/settingRules" },
      { title: "Game", route: "/game" },
      { icon: "fab fa-gg", title: "Something Disabled", disabled: true },
    ];
    const { showMenu } = this.state;
    return (
      <NavBarLayout
        items={infoForItems}
        showMenu={showMenu}
        toogleMenu={this.toogleMenu}
        hideMenu={this.hideMenu}
      />
    );
  }
}
