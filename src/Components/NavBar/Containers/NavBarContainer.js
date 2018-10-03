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
      { icon: "fas fa-tachometer-alt", title: "dashboard", route: "/" },
      { icon: "fa fa-globe", title: "Carte", route: "/map" },
      { icon: "fas fa-sliders-h", title: "Administration" },
      { icon: "fab fa-gg", title: "BlockChain", disabled: true },
      { icon: "fas fa-sign-out-alt", title: "Déconnexion" },
      { icon: "fas fa-power-off", title: "Login", route: "/login" },
      { title: "Sign Up", route: "/sign_up" },
    ];
    const showMenu = this.state;
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
