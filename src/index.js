import React from 'react';
import ReactDOM from 'react-dom';
import GameContainer from './GameContainer';
import './index.css';
//import registerServiceWorker from './registerServiceWorker';
import GameStore from './stores/GameStore';
const store = new GameStore();
ReactDOM.render(
  <GameContainer gameStore={store} />,
  document.getElementById('root')
);
//registerServiceWorker();
