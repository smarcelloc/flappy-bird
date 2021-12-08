import Background from './components/Background';
import FlappyBird from './components/FlappyBird';
import Floor from './components/Floor';
import GameOver from './components/GameOver';
import GetReady from './components/GetReady';
import Score from './components/Score';
import Screen from './interfaces/Screen';
import PipesUtil from './util/pipes';

export const screenInit: Screen = {
  show: function (): void {
    Background.show();
    Floor.show();
    FlappyBird.show();
    GetReady.show();
  },
  update: function (): void {
    FlappyBird.fly();
    Floor.move();
  },
  action: function (): void {
    global.screenCurrent = screenPlay;
  },
};

export const screenPlay: Screen = {
  show: function (): void {
    Background.show();
    PipesUtil.showMove();
    Floor.show();
    FlappyBird.show();
    Score.show();
  },
  update: function (): void {
    FlappyBird.fly();
    Floor.move();
    FlappyBird.move();
    PipesUtil.generate();
    Score.scoring();

    screenPlay.break();
  },
  action: function (): void {
    FlappyBird.jump();
  },
  break: function (): void {
    const callbackBreak = () => {
      FlappyBird.sounds.hit.play();
      global.screenCurrent = screenGameOver;
    };

    const areaFloor = Floor.canvasY - FlappyBird.canvasHeight;
    if (FlappyBird.canvasY > areaFloor) {
      callbackBreak();
    }

    PipesUtil.break(FlappyBird, callbackBreak);
  },
};

export const screenGameOver: Screen = {
  show: function (): void {
    Background.show();
    PipesUtil.showBreak();
    Floor.show();
    FlappyBird.show();
    GameOver.show();
    Score.showMedal();
    Score.showScoreboard();
    Score.showBest();
  },
  update: function (): void {},
  action: function (): void {
    FlappyBird.reset();
    Score.reset();
    PipesUtil.reset();
    global.screenCurrent = screenPlay;
  },
};
