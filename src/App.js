import React, { Component } from 'react';
import Game from './containers/Game/Game';
import Settings from './containers/Settings/Settings';
import GameStore from './stores/GameStore';
import GameBoard from './components/GameBoard/GameBoard';
import { BrowserRouter, Route } from 'react-router-dom';
import i18n from './i18n';
import { Provider } from 'mobx-react';

const store = new GameStore(i18n.lng());

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Provider gameStore={store}>
          <GameBoard>
            <Route path="/" exact component={Game} />
            <Route path="/settings" component={Settings} />
          </GameBoard>
        </Provider>
      </BrowserRouter>
    );
  }
}

export default App;
