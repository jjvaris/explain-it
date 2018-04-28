import React, { Component } from 'react';
import './ListItem.css';
import classNames from 'classnames';

class ListItem extends Component {
  componentDidMount() {
    if (this.props.selected) {
      this.item.scrollIntoView({ block: 'center' });
    }
  }

  render() {
    const { children, selected, lng, onClick, value, ...rest } = this.props;
    const itemClass = classNames({ 'selected-item': selected });
    return (
      <li
        ref={item => (this.item = item)}
        className={itemClass}
        onClick={() => onClick(lng)}
        {...rest}
      >
        {selected ? <b>{children}</b> : children}
      </li>
    );
  }
}

export default ListItem;
