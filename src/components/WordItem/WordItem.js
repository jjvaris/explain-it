import React from 'react';
import './WordItem.css';
import { observer } from 'mobx-react';

const WordItem = ({ item, onClick }) => (
  <li onClick={() => onClick(item)}>
    {item.word} {item.guessed ? 'arvattu' : 'skipattu'}
  </li>
);

export default observer(WordItem);
