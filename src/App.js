import React, { Component } from 'react';
import Game from './containers/Game/Game';
import Settings from './containers/Settings/Settings';
import GameStore from './stores/GameStore';
import GameBoard from './components/GameBoard/GameBoard';
import { BrowserRouter, Route } from 'react-router-dom';
import i18n from './i18n';

const store = new GameStore(i18n.lng());

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <GameBoard>
          <Route path="/" exact render={() => <Game gameStore={store} />} />
          <Route
            path="/settings"
            render={() => <Settings gameStore={store} />}
          />
        </GameBoard>
      </BrowserRouter>
    );
  }
}

export default App;
