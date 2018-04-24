import React, { Component } from "react";
import NodeLogo from "./500px-Node.js_logo.svg.png";
import "./NodeComp.css";

class NodeComp extends Component {
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
          className="nodecontainer"
          id="open-container"
        >
          <img src={NodeLogo} className="codelogo" alt="logo" id="nodeimg" />
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
          className="nodecontainer"
          id="topic-text"
        >
          NODE.JS
        </div>
      );
    }
  }
}
export default NodeComp;
