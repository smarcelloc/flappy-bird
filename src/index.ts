import Background from './components/Background';
import FlappyBird from './components/FlappyBird';
import Floor from './components/Floor';

const flappyBird = new FlappyBird();
const floor = new Floor();
const background = new Background();

function loop() {
  background.show();
  flappyBird.show();
  floor.show();
  requestAnimationFrame(loop);
}

loop();
