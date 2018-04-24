import React, { Component } from "react";
import { connect } from "react-redux";
import { getUserInfo } from "../../ducks/userReducer";
import "./NavBarComp.css";
import Uploader from "../UploaderComp/UploaderComp";
class NavBarComp extends Component {
  constructor() {
    super();
  }
  componentDidMount() {
    this.props.getUserInfo();
  }
  render() {
    return (
      <div className="navbar">
        <div className="row">
          <a href={process.env.REACT_APP_LOGIN}>
            <button  type="button" className="btn btn-outline-dark" id='button-text' >
              Login
            </button>
          </a>
          <a href={process.env.REACT_APP_LOGOUT}>
            <button type="button" className="btn btn-outline-dark" id='button-text'>
              Logout
            </button>
          </a>
        </div>
        <span id="today-text">{this.props.user.display_name}</span>
        <img src={this.props.user.img} id="userimg" />
      </div>
    );
  }
}
function mapStateToProps(state) {
  return {
    user: state.user
  };
}
export default connect(mapStateToProps, { getUserInfo })(NavBarComp);

{
  /* <div>
<a href={process.env.REACT_APP_LOGIN}><button>Login</button></a>
<a href={process.env.REACT_APP_LOGOUT}><button>Logout</button></a>
<span>{this.props.user.display_name}</span>
<img src = {this.props.user.img} id='userimg'/>

</div> */
}
