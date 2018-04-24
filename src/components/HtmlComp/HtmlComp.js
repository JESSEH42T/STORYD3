import React, { Component } from "react";
import HtmlLogo from "./HTML5_logo_and_wordmark.svg.png";
import "./HtmlComp.css";

class HtmlComp extends Component {
  constructor() {
    super();
    this.state = {
      isHidden: true
    };
  }
  toggleHidden() {
    this.setState({
      isHidden: !this.state.isHidden
    });
  }
  render() {
    if (this.state.isHidden === false) {
      return (
        <div
          onClick={() => this.toggleHidden()}
          className="htmlcontainer"
          id="open-container"
        >
          <img src={HtmlLogo} className="codelogo" alt="logo" id="htmlimg" />
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
          onClick={() => this.toggleHidden()}
          className="htmlcontainer"
          id="topic-text"
        >
          HTML
        </div>
      );
    }
  }
}
export default HtmlComp;
