import React from 'react';
import './WordItem.css';
import { observer } from 'mobx-react';
import Switch from '../Switch/Switch';

const WordItem = ({ item, onClick }) => (
  <li className="word-item" onClick={() => onClick(item)}>
    <button className="word-item__switch">
      <Switch guessed={item.guessed} />
    </button>
    <span className="word-item__word">{item.word}</span>
  </li>
);

export default observer(WordItem);
