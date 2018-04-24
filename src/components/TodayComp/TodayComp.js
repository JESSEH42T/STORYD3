import React, { Component } from "react";
import "./TodayComp.css";
import JsLogo from "../JavascriptComp/JavaScript_logo_2.svg.png";
import axios from "axios";
class Today extends Component {
  constructor() {
    super();

    this.state = {
      todaysLecture: [],
      comments: [],
      userInput:''
    };

  }
  componentDidMount() {
    this.getComments();
    axios.get("/api/get_audio_files").then(res => {
      this.setState({
        todaysLecture: res.data
      });
    });
  }
  getComments() {
    axios.get("/api/get_all_comments").then(res =>{
      this.setState({
        comments: res.data
      })
    })
  }
  handleUserInput(e) {
    this.setState({
      userInput: e.target.value
    });
  }

  handleSubmit() {
    let body = {
      user_comment: this.state.userInput
    };
    axios.post("/api/create_comment", body).then(res => {console.log(res)
      this.setState({
        comments: res.data
      })
    });
  }
  handleDelete(id) {
    console.log( id )
    let body = {
      comment_id: id
    }
    axios.delete("/api/delete_comment/"+id, body).then( res => {
      this.getComments()
    })
  }
  handleEdit(id) {
    let body = {
      user_comment: this.state.userInput,
      comment_id: id
    }
    axios.put("/api/edit_comment", body).then(res => {
      console.log(res);
    })
  }
  render() {
    let displayComments = this.state.comments.map((comment,index) =>( 
       
      <div key={index} >
        <p> {comment.user_comment}  </p>
        <p>{comment.display_name}</p> 
        <button onClick={ ()=>this.handleDelete(comment.comment_id) } >Delete</button>
        <button onClick={ ()=> this.handleEdit(comment.comment_id) } >Edit</button>
      </div>
    ))
    return (
<div className="container">
  <div className="row" id='today-text'>
    <div className="col-sm ">
        <h1 id="title-text">Today</h1>
        <img class="img-fluid" alt="Responsive image"  src={JsLogo} />
        <a className="btn btn-outline-dark" href="https://s3.us-east-2.amazonaws.com/storyddevmtn/Joe+full+stack+Lecture.m4a" id='button-text' >Listen</a>
      
    </div>
    <div className="col-sm">
        <h1 id="title-text" >Comments</h1>
        <input type="text" onChange={e => this.handleUserInput(e)} value={this.state.userInput} />
        <div>{displayComments}</div>
        <button type="button" className="btn btn-outline-dark" onClick={ ()=> this.handleSubmit() } id='button-text' >Submit</button>
      
    </div>

  </div>
</div>
        
        
        
        

    );
  }
}
export default Today;
