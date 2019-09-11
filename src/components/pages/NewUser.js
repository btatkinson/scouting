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
           key={pdata.key}
           ref={pdata.ref}
           ptype={pdata.ptype}
           handleClick={pdata.panelClick}
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
        'key':'login',
        'ref':this.loginRef,
        'ptype':'login',
        'panelClick':this.panelClick
      },
      {
        'key':'signup',
        'ref':this.signupRef,
        'ptype':'signup',
        'panelClick':this.panelClick
      },
    ]

    this.state = {
      'loginBB': null,
      'signupBB': null,
      'pdata':this.pdata
    }
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
    this.setState({
      pdata: this.state.pdata.reverse()
    });
  }



  render(){

    return (
      <div className='newuser'>
        <div className='jumbo'>
          <Panels pdata={this.state.pdata}/>
        </div>
      </div>
    )
  }
}



export default NewUser;
