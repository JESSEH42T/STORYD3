import React, { Component } from "react";
import BlueLogoSvg from "./LogoBlue.svg";
import BlackLogo from "./LogoBlack.svg";
import "./Header.css";
class Header extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div className="headercontainer">
        <img src={BlackLogo} className="logo" alt="logo" id="storydlogo" />
        {/* <img src='https://picsum.photos/1600/1600/?random'  id ='backgroundimg'/> */}
      </div>
    );
  }
}
export default Header;
