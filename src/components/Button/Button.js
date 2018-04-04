import React from 'react';
import classNames from 'classnames/bind';
import './Button.css';

const styles = {
  start: 'btn-start',
  skip: 'btn-skip',
  reset: 'btn-reset',
  continue: 'btn-continue',
  disabled: 'btn-disabled',
  score: 'btn-score'
};

const cx = classNames.bind(styles);

const Button = props => {
  const { children, bStyle, enabled, ...rest } = props;
  return (
    <button {...rest} className={cx(bStyle)} disabled={!enabled}>
      {children}
    </button>
  );
};

export default Button;
