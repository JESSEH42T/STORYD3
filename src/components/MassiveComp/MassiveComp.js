import React, { Component } from "react";
import PostgresLogo from "./540px-Postgresql_elephant.svg.png";
import "./MassiveComp.css";
class MassiveComp extends Component {
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
          className="postgrescontainer"
          id="open-container"
        >
          <img
            src={PostgresLogo}
            className="codelogo"
            alt="logo"
            id="postgresimg"
          />
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
          className="postgrescontainer"
          id="topic-text"
        >
          POSTGRESQL
        </div>
      );
    }
  }
}

export default MassiveComp;
