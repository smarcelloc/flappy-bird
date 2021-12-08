import Background from './components/Background';
import FlappyBird from './components/FlappyBird';
import Floor from './components/Floor';
import Screen from './interfaces/Screen';

const flappyBird = new FlappyBird();
const floor = new Floor();
const background = new Background();

export const screenInit: Screen = {
  show: function (): void {
    background.show();
    flappyBird.show();
    floor.show();
  },
  update: function (): void {},
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
    flappyBird.move();
    screenPlay.break();
  },
  action: function (): void {
    flappyBird.jump();
  },
  break: function (): void {
    const areaFloor = floor.canvasY - flappyBird.canvasHeight;
    if (flappyBird.canvasY > areaFloor) {
      flappyBird.canvasY = 40;
      global.screenCurrent = screenInit;
    }
  },
};
