import React, { Component } from 'react';
import {Animated} from "react-animated-css";

class NPInfo extends Component {
  constructor(props){
    super(props);

    this.rightVisClasses = 'right-fade-in'
    this.rightHidClasses = 'right-fade-out'

    this.leftVisClasses = 'left-fade-in'
    this.leftHidClasses = 'left-fade-out'

    console.log(this.props.signup);

  }

  render() {
    return(
      <div className='info-c'>
        <div className='info-tc'>
          <Animated className='info-text' animationIn="fadeInRight" animationOut="fadeOutRight" animationInDuration={1000} animationOutDuration={1000} isVisible={this.props.signup}>
              <h1>One of Us?</h1>
              <p>Welcome back!</p>
          </Animated>
          <Animated className='info-text' animationIn="fadeInLeft" animationOut="fadeOutLeft" animationInDuration={1000} animationOutDuration={1000} isVisible={!this.props.signup}>
              <h1>New to Us?</h1>
              <p>Sign-up today!</p>
          </Animated>
        </div>
        <button className='account-btn' onClick={this.props.handleClick}>
          <Animated className='account-btn-text' animationIn="slideInDown" animationOut="fadeOutUp" isVisible={this.props.signup}>
            <p>Login</p>
          </Animated>
          <Animated className='account-btn-text' animationIn="slideInUp" animationOut="fadeOutDown" isVisible={!this.props.signup}>
            <p>Sign-Up</p>
          </Animated>
        </button>
      </div>
    )
  }

}

class NPForm extends Component {

  render() {
    return(
      <div className='form'>
        <h1>Form</h1>
      </div>
    )
  }

}

class Panel extends Component {

  constructor(props){
    super(props);
    this.state = {
      'signup':this.props.signup
    }
  }

  handleClick = () => {
    this.props.handleClick();
  }

  render() {
    return (
      <div className={`flex-column ${this.props.ptype}`}>
        {this.props.ptype=='info' ?
          <NPInfo handleClick={this.handleClick} signup={this.props.signup}/> :
          <NPForm signup={this.props.signup}/>
        }

      </div>
    );
  }

}




export default Panel;
