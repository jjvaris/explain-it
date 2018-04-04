import React from 'react';

const Row = props => {
  const { height, children } = props;
  return <div style={{ height: height }}>{children}</div>;
};

export default Row;
