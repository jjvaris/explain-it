import React, { Component } from 'react';
import SettingsHeader from '../../components/SettingsHeader/SettingsHeader';
import List from '../../components/List/List';
import LanguageItem from '../../components/LanguageItem/LanguageItem';
import languages from './languages';
import { translate } from 'react-i18next';
import { Redirect } from 'react-router-dom';
import { inject, observer } from 'mobx-react';

class Settings extends Component {
  state = {
    languageSelected: false
  };

  handleLanguageSelect = lng => {
    const { gameStore, i18n } = this.props;
    gameStore.fetchWords(lng);
    i18n.changeLanguage(lng, () => {
      this.setState({ languageSelected: true });
      gameStore.resetGame();
    });
  };

  render() {
    if (this.state.languageSelected) return <Redirect to="/" />;
    const { t, i18n } = this.props;
    const currentLng = i18n.lng();
    return (
      <React.Fragment>
        <SettingsHeader title={t('languageDropdown')} />
        <List>
          {languages.map(lng => (
            <LanguageItem
              onClick={this.handleLanguageSelect}
              key={lng.code}
              lng={lng.code}
              selected={currentLng === lng.code}
            >
              {lng.language}
            </LanguageItem>
          ))}
        </List>
      </React.Fragment>
    );
  }
}

export default translate()(inject('gameStore')(observer(Settings)));
