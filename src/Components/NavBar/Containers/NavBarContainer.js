import React from "react";
import NavBarLayout from "../Components/NavBarLayout";

export default class NavBarContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = { showMenu: false };

    this.setWrapperRef = this.setWrapperRef.bind(this);
    this.handleClickOutside = this.handleClickOutside.bind(this);
  }

  componentDidMount() {
    document.addEventListener("mousedown", this.handleClickOutside);
  }

  componentWillUnmount() {
    document.removeEventListener("mousedown", this.handleClickOutside);
  }

  setWrapperRef(node) {
    this.wrapperRef = node;
  }

  hideMenu = () => {
    this.setState({
      showMenu: false,
    });
  };

  toogleMenu = () => {
    const { showMenu } = this.state;
    this.setState({
      showMenu: !showMenu,
    });
  };

  // this function is used to close the menu if clicked outside of it
  handleClickOutside(event) {
    if (this.wrapperRef && !this.wrapperRef.contains(event.target)) {
      this.hideMenu();
    }
  }

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
        refLinker={this.setWrapperRef}
        items={infoForItems}
        showMenu={showMenu}
        toogleMenu={this.toogleMenu}
        hideMenu={this.hideMenu}
      />
    );
  }
}
