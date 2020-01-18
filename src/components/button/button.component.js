import React, { Component } from 'react';
import './button.style.scss';

class Button extends Component {
  render() {
    
      return(
      	<button onClick={this.props.onInputChange}>
      		{this.props.sign}
      	</button>
  		);
  }
}
export default Button;