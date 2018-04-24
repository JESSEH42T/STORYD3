import React, { Component } from "react";
import "./Review.css";
import Uploader from '../UploaderComp/UploaderComp'

class Review extends Component {
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
          className="uploadercontainer"
          id="open-container"
        >
          
          <a
            id="linkFile"
            href="https://s3.us-east-2.amazonaws.com/storyddevmtn/Joe+full+stack+Lecture.m4a"
          >
           <Uploader/>
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
          upload
        </div>
      );
    }
  }
}  
export default Review;