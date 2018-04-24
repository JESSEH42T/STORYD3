import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getUserInfo } from './ducks/userReducer'
import logo from './logo.svg';
import './App.css';
import Header from './components/Header/Header'
import JavascriptComp from './components/JavascriptComp/JavascriptComp';
import HtmlComp from './components/HtmlComp/HtmlComp';
import CssComp from './components/CssComp/CssComp';
import GitComp from './components/GitComp/GitComp';
import ReactComp from './components/ReactComp/ReactComp';
import MassiveComp from './components/MassiveComp/MassiveComp';
import NodeComp from './components/NodeComp/NodeComp';
import Review from './components/Review/Review';
import Footer from './components/Footer/Footer';
import Today from './components/TodayComp/TodayComp'
import Uploader from './components/UploaderComp/UploaderComp'
import NavBarComp from './components/NavBarComp/NavBarComp'
class App extends Component {
  constructor(props) {
    super(props)
    this.state={};
  }
  componentDidMount() {
    this.props.getUserInfo()
  }
  render() {
    return (
      <div >
      {/* <a href={process.env.REACT_APP_LOGIN}><button>Login</button></a>
      <a href={process.env.REACT_APP_LOGOUT}><button>Logout</button></a>
      <span>{this.props.user.display_name}</span>
      <img src = {this.props.user.img} id='userimg'/> */}
        <NavBarComp/>
        
        <Header />
        <Today/>
        <JavascriptComp />
        <HtmlComp />
        <CssComp  />
        <GitComp  />
        <MassiveComp  />
        <ReactComp  />
        <NodeComp  />
        <Uploader/>
        <Footer  />
      </div>
    );
  }
}
function mapStateToProps(state) {
  return {
    user: state.user
  }
}
export default connect(mapStateToProps, {getUserInfo})(App);


// Dark Blue: #0F277B
// Bright Pink: #F31E76
// Yellow: #f6db18
// Purple: #9F4CD6
// Light Pink: #FFC0C0
// Light Blue: #1D90D6



