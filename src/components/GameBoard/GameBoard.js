import React, { Component } from 'react';
import './GameBoard.css';

class GameBoard extends Component {
  render() {
    return <div className="game-board">{this.props.children}</div>;
  }
}

export default GameBoard;
