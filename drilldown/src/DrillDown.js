import React, { Component } from 'react';
import List from './List';
import './drillDown.css';

class DrillDown extends Component {
  render() {
    return (
      <div className='drill-down'>
        <List>{this.props.children}</List>
      </div>
    );
  }
}

export default DrillDown;