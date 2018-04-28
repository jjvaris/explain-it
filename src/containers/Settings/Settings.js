import React, { Component } from 'react';
import SettingsHeader from '../../components/SettingsHeader/SettingsHeader';
import List from '../../components/List/List';
import ListItem from '../../components/ListItem/ListItem';
import languages from './languages';
import { translate } from 'react-i18next';
import { Redirect } from 'react-router-dom';

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
        <SettingsHeader>{t('languageDropdown')}</SettingsHeader>
        <List>
          {languages.map(lng => (
            <ListItem
              onClick={this.handleLanguageSelect}
              key={lng.code}
              lng={lng.code}
              selected={currentLng === lng.code}
            >
              {lng.language}
            </ListItem>
          ))}
        </List>
      </React.Fragment>
    );
  }
}

export default translate()(Settings);
