import React from 'react';
import { withRouter } from 'react-router';
import classNames from 'classnames/bind';
import './Button.css';

const styles = {
  start: 'btn btn--start',
  skip: 'btn btn--skip',
  reset: 'btn btn--reset',
  continue: 'btn btn--continue',
  confirm: 'btn btn--confirm',
  disabled: 'btn btn--disabled',
  score: 'btn btn--score',
  disabledScore: 'btn btn--disabled-score'
};

const cx = classNames.bind(styles);

const Button = props => {
  const { children, bStyle, enabled, ...rest } = props;
  const btnClass = !enabled ? cx('disabled') : cx(bStyle);
  return (
    <button {...rest} className={btnClass} disabled={!enabled}>
      {children}
    </button>
  );
};

export default Button;

const LinkButton = withRouter(props => {
  const { children, history, to, onClick, staticContext, ...rest } = props;
  const btnClass = props.disabled ? cx('disabledScore') : cx('score');
  return (
    <button
      {...rest}
      onClick={event => {
        onClick && onClick(event);
        history.push(to);
      }}
      className={btnClass}
    >
      {children}
    </button>
  );
});

export { LinkButton };
