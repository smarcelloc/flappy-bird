import Background from './components/Background';
import FlappyBird from './components/FlappyBird';
import Floor from './components/Floor';
import GameOver from './components/GameOver';
import GetReady from './components/GetReady';
import Score from './components/Score';
import Screen from './interfaces/Screen';
import PipesUtil from './util/pipes';

const flappyBird = new FlappyBird();
const floor = new Floor();
const background = new Background();
const getReady = new GetReady();
const gameOver = new GameOver();
const score = new Score();

export const screenInit: Screen = {
  show: function (): void {
    background.show();
    flappyBird.show();
    floor.show();
    getReady.show();
  },
  update: function (): void {
    flappyBird.fly();
    floor.move();
  },
  action: function (): void {
    global.screenCurrent = screenPlay;
  },
};

export const screenPlay: Screen = {
  show: function (): void {
    background.show();
    PipesUtil.showMove();
    floor.show();
    flappyBird.show();
    score.show();
  },
  update: function (): void {
    screenInit.update();
    flappyBird.move();
    screenPlay.break();
    floor.move();
    PipesUtil.generate();
    score.scoring();
  },
  action: function (): void {
    flappyBird.jump();
  },
  break: function (): void {
    const areaFloor = floor.canvasY - flappyBird.canvasHeight;

    if (flappyBird.canvasY > areaFloor) {
      global.screenCurrent = screenGameOver;
      flappyBird.sounds.hit.play();
    }
  },
};

export const screenGameOver: Screen = {
  show: function (): void {
    background.show();
    PipesUtil.showBreak();
    floor.show();
    flappyBird.show();
    gameOver.show();
    score.showMedal();
  },
  update: function (): void {},
  action: function (): void {
    flappyBird.reset();
    score.reset();
    global.screenCurrent = screenPlay;
  },
};
