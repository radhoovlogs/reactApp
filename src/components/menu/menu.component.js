import React, { Component } from 'react';
import './menu.style.scss';

import Button from '../button/button.component';

class Menu extends Component {
  render() {
    
      return(
      	<ul class="menu">
      		<Button />
      		<Button />
      	</ul>
  		);
  }
}
export default Menu;