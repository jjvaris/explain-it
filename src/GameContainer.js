import React, { Component } from 'react';
//import GameBoard from './components/GameBoard/GameBoard';
//import UpperSide from './components/UpperSide/UpperSide';
//import Controls from './containers/Controls/Controls';
import Grid from './components/Grid/Grid';
import Row from './components/Row/Row';
import Button from './components/Button/Button';
import { observer } from 'mobx-react';

//const store = new GameStore();

class GameContainer extends Component {
  render() {
    // store state
    const { time, word, started, score, isTimeOut } = this.props.gameStore;
    // store actions
    const { startGame, nextWord, skipWord, resetGame } = this.props.gameStore;
    return (
      <div className="game-board">
        <div className="top">
          <div>Settings</div>
          <div>{time}</div>
          <div>{word}</div>
        </div>
        <Grid height="70%">
          <Row>
            <Button
              enabled={!isTimeOut}
              bStyle="start"
              onClick={started ? nextWord : startGame}
            >
              {started ? 'Next' : 'Start'}
            </Button>
          </Row>
          <Row>
            <Button
              enabled={started && !isTimeOut}
              bStyle="skip"
              onClick={skipWord}
            >
              Skip
            </Button>
          </Row>
          <Row>
            <Button
              enabled={isTimeOut || started}
              bStyle={isTimeOut ? 'continue' : 'reset'}
              onClick={isTimeOut ? startGame : resetGame}
            >
              {isTimeOut ? 'Continue' : 'Reset'}
            </Button>
          </Row>
          <Row>
            <Button
              enabled={isTimeOut || started}
              bStyle="score"
              onClick={this.handleScoreClick}
            >
              {score}
            </Button>
          </Row>
        </Grid>
      </div>
    );
  }
}
//<UpperSide time={time} word={word} />
//<Controls gameStore={store} />
export default observer(GameContainer);
