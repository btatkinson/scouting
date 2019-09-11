import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Panel from '../components/Panel.js';
import { Animated } from "react-animated-css";
import '../../styles/NewUser.scss';

class NewUser extends Component {

  constructor(props) {
    super(props);

    this.loginRef = React.createRef();
    this.signupRef = React.createRef();

    this.pdata = [
      {
        'key':'login',
        'ref':this.loginRef,
        'ptype':'login'
      },
      {
        'key':'signup',
        'ref':this.signupRef,
        'ptype':'signup'
      },
    ]

    this.panels=this.pdata.map((pdata, i) => {
        return (
          <Panel
            key={pdata.key}
            ref={pdata.ref}
            ptype={pdata.ptype}
            handleClick={this.panelClick}
          />
        )
    })

    this.state = {
      'loginBB': null,
      'signupBB': null,
      'pdata':this.pdata,
      'panels':this.panels
    }

    this.panelClick = this.panelClick.bind(this);
  }

  componentDidMount(){

    const loginNode = ReactDOM.findDOMNode( this.loginRef.current );
    const signupNode = ReactDOM.findDOMNode( this.signupRef.current );

    const loginBBox = loginNode.getBoundingClientRect();
    const signupBBox = signupNode.getBoundingClientRect();

    this.setState({
      'loginBB': loginBBox,
      'signupBB': signupBBox
    });
  }

  componentDidUpdate() {

    const oldLoginBB = this.state.loginBB;
    const oldSignupBB = this.state.signupBB;


  }


  panelClick(){
    const reverseData = this.state.pdata.reverse()
    const reversePanels = this.state.pdata.reverse().map((pdata, i) => {
        return (
          <Panel
            key={pdata.key}
            ref={pdata.ref}
            ptype={pdata.ptype}
            handleClick={this.panelClick}
          />
        )
    })
    this.setState({
      'pdata':reverseData,
      'panels':reversePanels
    });
  }



  render(){

    return (
      <div className='newuser'>
        <div className='jumbo'>
          {this.state.panels}
        </div>
      </div>
    )
  }
}



export default NewUser;
