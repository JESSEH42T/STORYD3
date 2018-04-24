import React, { Component } from "react";
import SqlLogo from "./SqlLogo.svg";
import "./SqlComp.css";

class Sql extends Component {
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
          className="sqlcontainer"
          id="open-container"
        >
          <img src={SqlLogo} className="codelogo" alt="logo" id="sqlimg" />
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
          className="sqlcontainer"
          id="topic-text"
        >
          SQL
        </div>
      );
    }
  }
}
export default Sql;
