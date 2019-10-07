import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import '../../styles/NewSplash.scss';

class NewSplash extends Component {

  constructor(props) {
    super(props);
    this.switchRef = React.createRef();
    this.formRef = React.createRef();

    this.panelClick = this.panelClick.bind(this);

    this.state = {
      'loginForm':true
    }
    this.formBB = null;
    this.switchBB = null;
  }

  componentDidMount(){

    const formNode = ReactDOM.findDOMNode( this.formRef.current );
    const switchNode = ReactDOM.findDOMNode( this.switchRef.current );

    const formBBox = formNode.getBoundingClientRect();
    const switchBBox = switchNode.getBoundingClientRect();

    this.formBB = formBBox;
    this.switchBB = switchBBox;
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
      'loginForm':!this.state.loginForm
    });
  }

  render() {
    return (
      <div className='splash'>
        <div className='jumbo'>
          <div
          className={`switchPanel ${this.state.loginForm ? 'first' : 'second'}`}
          ref={this.switchRef}
          onClick={this.panelClick}
          >
          {this.state.loginForm ?
            <h1>Switch To Signup</h1> :
            <h1>Switch To Login</h1>
          }
          </div>
          <div
          className={`formPanel ${this.state.loginForm ? 'second' : 'first'}`}
          ref={this.formRef}
          onClick={this.panelClick}
          >
            {this.state.loginForm ?
              <h1>Login Form</h1> :
              <h1>Sign Up Form</h1>
            }

          </div>
        </div>
      </div>
    );
  }

}

export default NewSplash;
