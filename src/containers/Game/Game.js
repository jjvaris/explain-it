import React, { Component } from 'react';
import Grid from '../../components/Grid/Grid';
import Row from '../../components/Row/Row';
import Button from '../../components/Button/Button';
import { observer, inject } from 'mobx-react';
import { translate } from 'react-i18next';
import { Link } from 'react-router-dom';

class Game extends Component {
  render() {
    // i18n translator
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
            <Link to="/guessed">
              <Button enabled={isTimeOut || started} bStyle="score">
                {score}
              </Button>
            </Link>
          </Row>
        </Grid>
      </React.Fragment>
    );
  }
}

export default translate()(inject('gameStore')(observer(Game)));
