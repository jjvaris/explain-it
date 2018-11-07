import React, { Component } from 'react';
import SettingsHeader from '../../components/SettingsHeader/SettingsHeader';
import { inject, observer } from 'mobx-react';
import { translate } from 'react-i18next';
import List from '../../components/List/List';
import WordItem from '../../components/WordItem/WordItem';

class GuessedWords extends Component {
  render() {
    const { playedWords, toggleWordGuessedState } = this.props.gameStore;

    const wordItems = playedWords
      .reverse()
      .map(item => (
        <WordItem
          key={item.word}
          item={item}
          onClick={toggleWordGuessedState}
        />
      ));

    return (
      <React.Fragment>
        <SettingsHeader>Arvatut sanat</SettingsHeader>
        <List>{wordItems}</List>
      </React.Fragment>
    );
  }
}

export default translate()(inject('gameStore')(observer(GuessedWords)));
