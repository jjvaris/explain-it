import React, { Component } from 'react';
import Grid from '../../components/Grid/Grid';
import Row from '../../components/Row/Row';
import Button from '../../components/Button/Button';
import { observer } from 'mobx-react';

class Controls extends Component {
  render() {
    // store state
    const { started, score, isTimeOut } = this.props.gameStore;
    // store actions
    const { startGame, nextWord, skipWord, resetGame } = this.props.gameStore;
    return (
      <Grid>
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
    );
  }
}

export default observer(Controls);
