import React, { Component } from "react";
import CssLogo from "./CSS3_logo_and_wordmark.svg.png";
import "./CssComp.css";
class CssComp extends Component {
  constructor() {
    super();
    this.state = {
      isHidden: true
    };
  }
  ToggleHidden() {
    this.setState({
      isHidden: !this.state.isHidden
    });
  }

  render() {
    if (this.state.isHidden === false) {
      return (
        <div
          onClick={() => this.ToggleHidden()}
          className="csscontainer"
          id="open-container"
        >
          <img src={CssLogo} className="codelogo" alt="logo" id="cssimg" />
          <a
            id="linkFile"
            href="https://s3.us-east-2.amazonaws.com/storyddevmtn/Joe+full+stack+Lecture.m4a"
          >
            Joe Fullstack Lecture
          </a>
        </div>
      );
    } else {
      return (
        <div
          onClick={() => this.ToggleHidden()}
          className="csscontainer"
          id="topic-text"
        >
          CSS
        </div>
      );
    }
  }
}
export default CssComp;
