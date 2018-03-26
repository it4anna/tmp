import React, { Component } from 'react';
import './list.css';

class List extends Component {
  renderList(children) {
    return (
      <div className='sub-item-content'>
        <div className='placeholder'>{children.label}</div>
          <div className='list'>
            <List>{children.children}</List>
        </div>
      </div>
    );
  }

  render() {
    const { children } = this.props;

    return (children.children
      ? <div className='sub-item'>{this.renderList(children)}</div>
      : children.map(child => child.children
        ? <div className='sub-item' key={child.id}>{this.renderList(child)}</div>
        : <div className='item' key={child.id}>{child.label}</div>
        )
    );
  }
};

export default List;