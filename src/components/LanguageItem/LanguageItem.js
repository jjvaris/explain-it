import React, { Component } from 'react';
import './LanguageItem.css';
import classNames from 'classnames';

class LanguageItem extends Component {
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

export default LanguageItem;
