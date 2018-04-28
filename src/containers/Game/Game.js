import React, { Component } from 'react';
//import GameBoard from './components/GameBoard/GameBoard';
//import UpperSide from './components/UpperSide/UpperSide';
//import Controls from './containers/Controls/Controls';
import Grid from '../../components/Grid/Grid';
import Row from '../../components/Row/Row';
import Button from '../../components/Button/Button';
import { observer } from 'mobx-react';
import { translate } from 'react-i18next';
import { Link } from 'react-router-dom';
//const store = new GameStore();

class Game extends Component {
  render() {
    // translator
    const { t } = this.props;
    // store state
    const { time, word, started, score, isTimeOut } = this.props.gameStore;
    // store actions
    const { startGame, nextWord, skipWord, resetGame } = this.props.gameStore;
    return (
      <React.Fragment>
        <div className="top">
          <div className="settings-back-button">
            <Link to="/settings">Settings</Link>
          </div>
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
              {started ? t('next') : t('start')}
            </Button>
          </Row>
          <Row>
            <Button
              enabled={started && !isTimeOut}
              bStyle="skip"
              onClick={skipWord}
            >
              {t('skip')}
            </Button>
          </Row>
          <Row>
            <Button
              enabled={isTimeOut || started}
              bStyle={isTimeOut ? 'continue' : 'reset'}
              onClick={isTimeOut ? startGame : resetGame}
            >
              {isTimeOut ? t('continue') : t('reset')}
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
      </React.Fragment>
    );
  }
}
//<UpperSide time={time} word={word} />
//<Controls gameStore={store} />
export default translate()(observer(Game));
