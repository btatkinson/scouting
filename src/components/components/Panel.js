import React, { Component } from 'react';

class Panel extends Component {

  handleClick = () => {
    this.props.handleClick();
  }

  render() {
    return (
      <div className={`flex-column ${this.props.ptype}`}>
        <h1 style={{color:'white'}}>{this.props.ptype}</h1>
        <button onClick={this.handleClick}>Switch</button>
      </div>
    );
  }

}

export default Panel;
