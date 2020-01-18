import React, { Component } from 'react';
import './counter.style.scss';

import Button from '../button/button.component';
import Display from '../display/display.component';

class Counter extends Component {
	constructor(props) {
    super(props);
    this.state = { val: 1 };

    this.increment = this.increment.bind(this);
    this.decrement = this.decrement.bind(this);
  }

  increment = () => {
		this.setState(
      { val: this.state.val + 1 }
    );
	};

	decrement = () => {
		this.setState(
      { val: this.state.val - 1 }
    );
	};

  render() {  
      return(
      	<div>
      		<Button sign="-" onInputChange = { this.decrement }/>
      		<Display val={this.state.val} />
      		<Button sign="+" onInputChange = { this.increment } />
      	</div>
  		);
  }
}
export default Counter;