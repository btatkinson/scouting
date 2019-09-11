import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Panel from '../components/Panel.js';
import { Animated } from "react-animated-css";
import '../../styles/NewUser.scss';

class Panels extends Component {

  render() {
    return(
      <div className='j-contain'>
       {this.props.pdata.map((pdata) =>
         <Panel
           key={pdata.ptype}
           ref={pdata.ref}
           ptype={pdata.ptype}
           handleClick={pdata.panelClick}
           signup={this.props.signup}
         />
        )}
      </div>
    )
  }

}

class NewUser extends Component {

  constructor(props) {
    super(props);

    this.loginRef = React.createRef();
    this.signupRef = React.createRef();

    this.panelClick = this.panelClick.bind(this);

    this.pdata = [
      {
        'key':'form',
        'ref':this.signupRef,
        'ptype':'form',
        'panelClick':this.panelClick
      },
      {
        'key':'info',
        'ref':this.loginRef,
        'ptype':'info',
        'panelClick':this.panelClick
      }
    ]

    this.state = {
      'pdata':this.pdata,
      'signup':false
    }
    this.loginBB = null;
    this.signupBB = null;

  }

  componentDidMount(){

    const loginNode = ReactDOM.findDOMNode( this.loginRef.current );
    const signupNode = ReactDOM.findDOMNode( this.signupRef.current );

    const loginBBox = loginNode.getBoundingClientRect();
    const signupBBox = signupNode.getBoundingClientRect();

    this.loginBB = loginBBox;
    this.signupBB = signupBBox;
  }

  componentDidUpdate() {

    const oldLoginBB = this.loginBB;
    const oldSignupBB = this.signupBB;

    const loginNode = ReactDOM.findDOMNode( this.loginRef.current );
    const signupNode = ReactDOM.findDOMNode( this.signupRef.current );

    const newLoginBB = loginNode.getBoundingClientRect();
    const newSignupBB = signupNode.getBoundingClientRect();

    const logindX = oldLoginBB.left - newLoginBB.left;
    const logindY = oldLoginBB.top - newLoginBB.top;

    const signupdX = oldSignupBB.left  - newSignupBB.left;
    const signupdY = oldSignupBB.top  - newSignupBB.top;

    requestAnimationFrame( () => {

      loginNode.style.transform  = `translate(${logindX}px, ${logindY}px)`;
      loginNode.style.transition = 'transform 0s';

      signupNode.style.transform  = `translate(${signupdX}px, ${signupdY}px)`;
      signupNode.style.transition = 'transform 0s';

      requestAnimationFrame( () => {
        // In order to get the animation to play, we'll need to wait for
        // the 'invert' animation frame to finish, so that its inverted
        // position has propagated to the DOM.
        //
        // Then, we just remove the transform, reverting it to its natural
        // state, and apply a transition so it does so smoothly.
        loginNode.style.transform  = '';
        loginNode.style.transition = 'transform 850ms';

        signupNode.style.transform  = '';
        signupNode.style.transition = 'transform 850ms';
      });
    });
    this.loginBB = newLoginBB;
    this.signupBB =  newSignupBB;
  }


  panelClick(){
    this.setState({
      pdata: this.state.pdata.reverse(),
      signup: !this.state.signup
    });
  }



  render(){
    const signup = this.state.signup;

    return (
      <div className='newuser'>
        <div className='jumbo'>
          <Panels pdata={this.state.pdata} signup={signup} />
        </div>
      </div>
    )
  }
}



export default NewUser;
