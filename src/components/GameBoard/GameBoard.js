import React, { Component } from 'react';
import './GameBoard.css';

class GameBoard extends Component {
  render() {
    return <div className="game">{this.props.children}</div>;
  }
}

export default GameBoard;
