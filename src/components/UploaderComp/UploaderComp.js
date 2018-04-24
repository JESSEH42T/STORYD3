import React, { Component } from "react";
import axios from "axios";
import { connect } from "react-redux";
import { getUserInfo } from "./../../ducks/userReducer";

class UploaderComp extends Component {
  constructor() {
    super();

    this.state = {
      audio: {
        file: "",
        filename: "",
        filetype: ""
      },
      audioUrl: ""
    };

    this.handleFile = this.handleFile.bind(this);
    this.sendFile = this.sendFile.bind(this);
  }

  componentDidMount() {
    this.props.getUserInfo();
  }
  //sending file to amazon s3

  sendToback(photo) {
    return axios.post("/api/photoUpload", photo);
  }

  handleFile(event) {
    const reader = new FileReader(),
      file = event.target.files[0],
      _this = this;

    reader.onload = photo => {
      this.setState({
        file: photo.target.result,
        filename: file.name,
        filetype: file.type
      });
    };
    reader.readAsDataURL(file);
  }

  sendFile(event) {
    event.preventDefault();
    ///// may need to define a body object and pass that in with only the 3 things from state, i might need to create an array in state of the users img uploads
    this.sendToback(this.state.audio).then(response => {
      console.log(response.data);
      this.uploadFileToDB(response);
    });
  }

  uploadFileToDB(response) {
    let body = {
      audio_file_url: response.data.Location
    };
    axios.post("/api/create_audio_file", body).then(response => {
      this.setState({
        audioUrl: response.data.Location
      });
    });
  }

  render() {
    let audioLink = this.state.file;
    return (
      <div>
        <form>
          <div>

            <label htmlFor="formControlFile" ></label>
            
            <input
              className="form-control-file "
              id="formControlFile"
              type="file"
            
              onChange={this.handleFile}
            
            />
          </div>
        </form>
        <button className="btn btn-outline-dark" onClick={this.sendFile}>
          Submit
        </button>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    user: state.user
  };
}

export default connect(mapStateToProps, { getUserInfo })(UploaderComp);
