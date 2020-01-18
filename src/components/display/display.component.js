import React, { Component } from 'react';
import './display.style.scss';

class Display extends Component {
  render() {
    
      return(
      	<div>{this.props.val}</div>
  		);
  }
}
export default Display;