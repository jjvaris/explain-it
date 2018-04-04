import React from 'react';

const UpperSide = ({ time, word }) => {
  return (
    <div className="top">
      <div>Settings</div>
      <div>{time}</div>
      <div>{word}</div>
    </div>
  );
};

export default UpperSide;
