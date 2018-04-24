import React, { Component } from "react";
import "./Footer.css";
import email from "./envelope.svg";
import insta from "./instagram.svg";

class Footer extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div className="footercontainer">
        <a id="instaimg" href= 'https://www.instagram.com/story_d.us/'> 
        <img src={insta} id="instaimg" />
        </a>
        <a href="mailto:storydco@gmail.com" id="emailimg" >

        <img src={email} id="emailimg" />
        </a>
      </div>
    );
  }
}
export default Footer;
