import React, { Component } from 'react';
import {Animated} from "react-animated-css";

class NPInfo extends Component {
  constructor(props){
    super(props);

    this.rightVisClasses = 'right-fade-in'
    this.rightHidClasses = 'right-fade-out'

    this.leftVisClasses = 'left-fade-in'
    this.leftHidClasses = 'left-fade-out'

  }

  render() {
    return(
      <div className='info-c'>
        <div className='info-tc'>
          <Animated className='info-text' animationIn="fadeInRight" animationOut="fadeOutRight" animationInDuration={1250} animationOutDuration={750} isVisible={this.props.signup}>
              <h1>One of Us?</h1>
              <p>Welcome back!</p>
          </Animated>
          <Animated className='info-text' animationIn="fadeInLeft" animationOut="fadeOutLeft" animationInDuration={1250} animationOutDuration={750} isVisible={!this.props.signup}>
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
  constructor(props){
    super(props);

    this.state = {
      loginUsername:"",
      loginPassword:"",
      removeLogin:false,
      removeSignup:true,
      animateLogin:'zoomIn',
      animateSignup:'',
      firstMount:true
    }

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }


  handleChange(evt){
    console.log(evt.target.value);
    this.setState({
      [evt.target.name]:evt.target.value
    });
  }

  handleSubmit(evt){
    evt.preventDefault();
    alert(`You typed: ${this.state.loginUsername}`);
    this.setState({
      loginUsername:'',
      loginPassword:''
    })
  }

  static getDerivedStateFromProps(props, state){
    console.log(props);
    let new_state = state;
    if (state.firstMount){
      new_state.firstMount = false;
    } else{
      if (!props.signup){
        new_state.animateLogin = 'zoomInDelay';
        new_state.animateSignup = 'zoomOut';
      } else{
        new_state.animateSignup = 'zoomInDelay';
        new_state.animateLogin = 'zoomOut';
      }
    }

    return new_state
  }

  loginAnimationEnd = () => {
    if(this.state.firstMount){
      this.setState({
        'firstMount':false,
      });
    }
    else{

    }
  }
  signupAnimationEnd = () => {

  }

  render() {

    return(
      <div className='form-c'>
        <div className='form-tc'>
          <div className={
              `form-text
              ${this.state.animateSignup}
              ${this.state.removeSignup ? 'remove':'remove'}
              `}
              onAnimationEnd={this.signupAnimationEnd}
          >
              <h1 className='su-text'>Sign-up Form</h1>
              <h2 className='su-text'>Welcome back, Blake</h2>
          </div>
          <div
            className={
              `form-text
              ${this.state.animateLogin}
              ${this.state.removeLogin ? 'remove':''}`
            }
            onAnimationEnd={this.loginAnimationEnd}
            >
            <div className='d-flex'>
              <h1 className='su-text'>Login Form</h1>
              <form className='l-form' onSubmit={this.handleSubmit}>
                <label htmlFor='email'></label>
                <input
                  type='text'
                  name='loginUsername'
                  onChange={this.handleChange}
                  placeholder={"Email"}
                  value={this.state.loginUsername}
                  className="login-user f-input"
                  >
                </input>
                <label htmlFor='password'></label>
                <input
                  type='text'
                  name='loginPassword'
                  onChange={this.handleChange}
                  value={this.state.loginPassword}
                  placeholder={"Password"}
                  className="login-pswd f-input"
                  >

                </input>
                <button type='submit'>
                  Submit
                </button>
              </form>
            </div>
          </div>
        </div>
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
