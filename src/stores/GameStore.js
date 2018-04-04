import { observable, decorate, action, computed } from 'mobx';

class GameStore {
  /* observable */
  started = false;
  score = 0;
  startTime = 10;
  time = this.startTime;
  word = 'Tähän tulee sana: ';

  /* non-observable */
  timer = null;

  startGame = () => {
    this.time = this.startTime;
    this.started = true;
    this.timer = setInterval(() => {
      this.time--;
      if (this.time === 0) this._resetTimer();
    }, 1000);
  };

  resetGame = () => {
    this.started = false;
    this.score = 0;
    this.word = 'Press Start';
    this._resetTimer();
  };

  nextWord = () => {
    this.score++;
    this.word = 'Sana ' + this.score;
  };

  skipWord = () => {
    this.score--;
    this.word = 'Sana ' + this.score;
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
}

decorate(GameStore, {
  started: observable,
  score: observable,
  time: observable,
  word: observable,
  startGame: action,
  resetGame: action,
  nextWord: action,
  skipWord: action,
  isTimeOut: computed,
  currentWord: computed
});

export default GameStore;
