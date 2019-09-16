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
        <div className={
            this.props.signup ?
            `${this.rightVisClasses}` :
            `${this.rightHidClasses}`
          }>
          <h1>New User?</h1>
        </div>
        <div className={
            !this.props.signup ?
            `${this.leftVisClasses}` :
            `${this.leftHidClasses}`
          }>
          <h1>One of Us?</h1>
        </div>
        <button className='account-btn' onClick={this.props.handleClick}>
          <Animated animationIn="slideInDown" animationOut="slideOutUp" isVisible={this.props.signup}>
            <p className='account-btn-text'>Login</p>
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
