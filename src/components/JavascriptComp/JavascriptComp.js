import React, { Component } from "react";
import "./JavascriptComp.css";
import JsLogo from "./JavaScript_logo_2.svg.png";
import reactS3Uploader from "../UploaderComp/UploaderComp";

class JavascriptComp extends Component {
  constructor() {
    super();
    this.state = {
      isHidden: true,
      javaScriptLectures: [
        { I: [] },
        { II: [] },
        { III: [] },
        { IV: [] },
        { V: [] }
      ]
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
        <div >

        <div
          onClick={() => this.toggleHidden()}
          className="jscontainer"
          id="open-container"
        >
          <img src={JsLogo} className="codelogo" alt="logo" id="jsimg" />
          
            <a
            id="linkFile"
            href="https://s3.us-east-2.amazonaws.com/storyddevmtn/Joe+full+stack+Lecture.m4a"
          >
          
            Joe Fullstack Lecture
            
          </a>
          {/* <reactS3Uploader/> */}
          {/* <p id='topic-text'>
                <ul>I{this.state.I}</ul>
                <ul>II{this.state.II}</ul>
                <ul>III{this.state.III}</ul>
                <ul>IV{this.state.IV}</ul>
                <ul>V{this.state.V}</ul>
                </p> */}
        </div>
        </div>
      );
    } else {
      return (
        <div >

        <div
          onClick={() => this.toggleHidden()}
          className="jscontainer"
          id="topic-text"
        >
          JAVASCRIPT
        </div>
        </div>
      );
    }
  }
}
export default JavascriptComp;
