import Background from './components/Background';
import FlappyBird from './components/FlappyBird';
import Floor from './components/Floor';
import GetReady from './components/GetReady';
import Screen from './interfaces/Screen';

const flappyBird = new FlappyBird();
const floor = new Floor();
const background = new Background();
const getReady = new GetReady();

export const screenInit: Screen = {
  show: function (): void {
    background.show();
    flappyBird.show();
    floor.show();
    getReady.show();
  },
  update: function (): void {
    flappyBird.fly();
  },
  action: function (): void {
    global.screenCurrent = screenPlay;
  },
};

export const screenPlay: Screen = {
  show: function (): void {
    background.show();
    flappyBird.show();
    floor.show();
  },
  update: function (): void {
    screenInit.update();
    flappyBird.move();
    screenPlay.break();
  },
  action: function (): void {
    flappyBird.jump();
  },
  break: function (): void {
    const areaFloor = floor.canvasY - flappyBird.canvasHeight;
    if (flappyBird.canvasY > areaFloor) {
      global.screenCurrent = screenInit;
    }
  },
};
