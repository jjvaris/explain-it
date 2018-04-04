import React from 'react';
//import Row from '../Row/Row';

const Grid = props => {
  const { children, height } = props;
  const rowHeight = 100 / children.length;
  const childrenWithCorrectHeight = React.Children.map(children, child =>
    React.cloneElement(child, { height: `${rowHeight}%` })
  );
  return <div style={{ height: height }}>{childrenWithCorrectHeight}</div>;
};

export default Grid;
