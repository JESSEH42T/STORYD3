import React, { Component } from "react";
import ReactLogo from "./500px-React-icon.svg.png";
import "./ReactComp.css";

class ReactComp extends Component {
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
          className="reactcontainer"
          id="open-container"
        >
          <img src={ReactLogo} className="codelogo" alt="logo" id="reactimg" />
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
          className="reactcontainer"
          id="topic-text"
        >
          REACT
        </div>
      );
    }
  }
}
export default ReactComp;
