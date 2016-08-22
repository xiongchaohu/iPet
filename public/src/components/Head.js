/**
 * Created by ritter on 16-8-14.
 */
import React, {Component} from 'react';// eslint-disable-line no-unused-vars

class Head extends Component {
  render() {
    return (
      <div className="head">
        <div className="headLeft">
          <img className="logo" src="/images/login_images/ipetlogo.png" alt="iPet logo" />
          <span className="logoName">宠物之家</span>
        </div>
        <div className="headRight">
          <span className="userImage">
            <img src="/images/dog.jpg" alt="用户头像"/>
          </span>
          <span className="logIn">注销</span>
        </div>
      </div>
    );
  }
}
export default Head;