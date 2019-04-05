import { observable, decorate, action, computed } from 'mobx';
import wordApi from '../api/wordApi';

class GameStore {
  constructor(i18n) {
    /* observable */
    this.started = false;
    this.startTime = 10;
    this.time = this.startTime;
    this.word = null;
    this.playedWords = [];
    this.confirmReset = false;
    /* non-observable */
    this.timer = null;
    this.words = [];
    this.seenWords = [];
    this.fetchWords(i18n.lng() || 'en');
  }

  fetchWords = lng => {
    wordApi
      .getWordsByLanguage(lng)
      .then(
        action(words => {
          this.words = [];
          words.forEach(word => this.words.push(word.toUpperCase()));
        })
      )
      .catch(error => {
        console.log('Error while requesting words', error);
      });
  };

  startGame = () => {
    this.time = this.startTime;
    this.started = true;
    this.word = this._getRandomWord();
    this.confirmReset = false;
    this.timer = setInterval(() => {
      this.time--;
      if (this.time === 0) this._resetTimer();
    }, 1000);
  };

  resetGame = () => {
    if (this.confirmReset) {
      this.started = false;
      this.playedWords = [];
      this.word = null;
      this.time = this.startTime;
      this.confirmReset = false;
      this._resetTimer();
    } else {
      this.confirmReset = true;
    }
  };

  nextWord = () => {
    this.playedWords.push({ word: this.word, guessed: true });
    this.word = this._getRandomWord();
    this.confirmReset = false;
  };

  skipWord = () => {
    this.playedWords.push({ word: this.word, guessed: false });
    this.word = this._getRandomWord();
    this.confirmReset = false;
  };

  toggleWordGuessedState = word => {
    console.log('item clicked', word);
    word.guessed = !word.guessed;
  };

  get isTimeOut() {
    return this.time === 0;
  }

  get currentWord() {
    return `${this.word} ${this.score}`;
  }

  get score() {
    let score = 0;
    this.playedWords.forEach(word => (word.guessed ? score++ : score--));
    return score;
  }

  _resetTimer = () => {
    if (this.timer) {
      clearInterval(this.timer);
      this.timer = null;
    }
  };

  _getRandomWord = index => {
    console.log(this.seenWords);
    let wordIndex = index || Math.floor(Math.random() * this.words.length);
    if (!this._isWordSeen(wordIndex)) {
      this.seenWords[wordIndex] = true;
      return this.words[wordIndex];
    }
    if (this._isAllWordsSeen()) this.seenWords = [];
    this._getRandomWord(++wordIndex < this.words.length ? wordIndex : 0);
  };

  _isWordSeen = index => this.seenWords[index];

  _isAllWordsSeen = () => this.seenWords.length === this.words.length;
}

decorate(GameStore, {
  started: observable,
  time: observable,
  word: observable,
  playedWords: observable,
  confirmReset: observable,
  fetchWords: action,
  startGame: action,
  resetGame: action,
  nextWord: action,
  skipWord: action,
  changeLanguage: action,
  toggleWordGuessedState: action,
  isTimeOut: computed,
  currentWord: computed,
  score: computed
});

export default GameStore;
