import React, { Component } from 'react';
import './list.css';

class List extends Component {
  constructor() {
    super();
    this.state = {
      visibleItemId: null
    };
  }

  onItemClick(item) {
    this.setState( prevState => ({
        visibleItemId: prevState.visibleItemId === item.id ? null : item.id
    }));
  }

  render() {
    const { children } = this.props;

    return (<div className='list'>
        {children.list.map(item => (
            <div className='list-container' key={item.id}>
              <div
                className='placeholder'
                onClick={() => this.onItemClick(item)}
              >
                {item.label}
              </div>
              {item.list && this.state.visibleItemId === item.id && <List>{item}</List>}
            </div>
      ))}
    </div>);
  }
}

export default List;