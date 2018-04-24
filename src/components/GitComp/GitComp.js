import React, { Component } from "react";
import GitLogo from "./500px-Feather-logos-github.svg.png";
import "./GitComp.css";

class GitComp extends Component {
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
          className="gitcontainer"
          id="open-container"
        >
          <img src={GitLogo} className="codelogo" alt="logo" id="gitimg" />
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
          className="gitcontainer"
          id="topic-text"
        >
          GITHUB
        </div>
      );
    }
  }
}
export default GitComp;
