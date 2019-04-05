import React, { Component } from 'react';

import Button, { LinkButton } from '../../components/Button/Button';
import Gear from '../../components/Gear/Gear';
import { observer, inject } from 'mobx-react';
import { translate } from 'react-i18next';
import { Link } from 'react-router-dom';
import GameBoard from '../../components/GameBoard/GameBoard';

class Game extends Component {
  render() {
    // i18n translator
    const { t } = this.props;
    // store state
    const {
      time,
      word,
      started,
      score,
      isTimeOut,
      confirmReset,
      playedWords
    } = this.props.gameStore;
    // store actions
    const { startGame, nextWord, skipWord, resetGame } = this.props.gameStore;
    return (
      <GameBoard>
        <div className="game__top">
          <div className="settings-header__btn">
            <Link to="/settings">
              <Gear />
            </Link>
          </div>
          <div className="game__time">{time}</div>
          <div className="game__word">{word ? word : t('help')}</div>
        </div>
        <div className="game__controls">
          <Button
            enabled={!isTimeOut}
            bStyle="start"
            onClick={started ? nextWord : startGame}
          >
            {started ? t('next') : t('start')}
          </Button>

          <Button
            enabled={started && !isTimeOut}
            bStyle="skip"
            onClick={skipWord}
          >
            {t('skip')}
          </Button>

          <Button
            enabled={isTimeOut || started}
            bStyle={isTimeOut ? 'continue' : confirmReset ? 'confirm' : 'reset'}
            onClick={isTimeOut ? startGame : resetGame}
          >
            {isTimeOut
              ? t('continue')
              : confirmReset ? t('confirmReset') : t('reset')}
          </Button>

          <LinkButton to="/guessed" disabled={playedWords.length === 0}>
            {score}
          </LinkButton>
        </div>
      </GameBoard>
    );
  }
}

export default translate()(inject('gameStore')(observer(Game)));
