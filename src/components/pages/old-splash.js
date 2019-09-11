import React, { Component } from 'react';
import { Animated } from "react-animated-css";
import '../../styles/Splash.scss';

class Splash extends Component {

  constructor(props) {
    super(props);

    this.state = {
    }
  }



  render(){
    return (
      <div className='splash'>
        <div className='flex-column fc-main'>
          <div className='fc-jumbo'>
            <h1 className='fcj-title'>SCRAPP</h1>
            <h3 className='fcj-slogan'>FIND YOUR NEXT BEAST</h3>
            <div className='fcj-links'>
              <h3 className='fcj-link'>LOGIN</h3>
              <h3 className='fcj-link'>SIGNUP</h3>
            </div>
          </div>

        </div>
        <div className='flex-column fc-menu'>
          <div className='fcm-orange'>
            <div className='fcm-links'>
              <h3 className='fcm-link'>Organizations</h3>
              <h3 className='fcm-link'>Scouts</h3>
              <h3 className='fcm-link'>About</h3>
              <h3 className='fcm-link'>Contact</h3>
            </div>
          </div>
        </div>
      </div>
    )
  }
}



export default Splash;
