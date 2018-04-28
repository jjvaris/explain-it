import { observable, decorate, action, computed } from 'mobx';
import wordApi from '../api/wordApi';

class GameStore {
  constructor(language) {
    /* observable */
    this.started = false;
    this.score = 0;
    this.startTime = 10;
    this.time = this.startTime;
    this.word = 'Press Start';
    /* non-observable */
    this.timer = null;
    this.words = [];
    this.seenWords = [];
    this.fetchWords(language || 'en');
  }

  fetchWords = lng => {
    wordApi
      .getWordsByLanguage(lng)
      .then(words => {
        this.words = words;
      })
      .catch(error => {
        console.log('Error while requesting words', error);
      });
  };

  startGame = () => {
    this.time = this.startTime;
    this.started = true;
    this.word = this._getRandomWord();
    this.timer = setInterval(() => {
      this.time--;
      if (this.time === 0) this._resetTimer();
    }, 1000);
  };

  resetGame = () => {
    this.started = false;
    this.score = 0;
    this.word = 'Press Start';
    this.time = this.startTime;
    this._resetTimer();
  };

  nextWord = () => {
    this.score++;
    this.word = this._getRandomWord();
  };

  skipWord = () => {
    this.score--;
    this.word = this._getRandomWord();
  };

  get isTimeOut() {
    return this.time === 0;
  }

  get currentWord() {
    return `${this.word} ${this.score}`;
  }

  _resetTimer = () => {
    if (this.timer) {
      clearInterval(this.timer);
      this.timer = null;
    }
  };

  _getRandomWord = index => {
    let wordIndex = index || Math.floor(Math.random() * this.words.length);
    if (!this._isWordSeen(wordIndex)) {
      this.seenWords[wordIndex] = true;
      return this.words[wordIndex].toUpperCase();
    }
    if (this._isAllWordsSeen()) this.seenWords = [];
    this._getRandomWord(++wordIndex < this.words.length ? wordIndex : 0);
  };

  _isWordSeen = index => this.seenWords[index];

  _isAllWordsSeen = () => this.seenWords.length === this.words.length;
}

decorate(GameStore, {
  started: observable,
  score: observable,
  time: observable,
  word: observable,
  fetchWords: action,
  startGame: action,
  resetGame: action,
  nextWord: action,
  skipWord: action,
  changeLanguage: action,
  isTimeOut: computed,
  currentWord: computed
});

export default GameStore;
