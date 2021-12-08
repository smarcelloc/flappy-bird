import FlappyBird from './components/FlappyBird';
import Floor from './components/Floor';

const flappyBird = new FlappyBird();
const floor = new Floor();

function loop() {
  flappyBird.show();
  floor.show();
  requestAnimationFrame(loop);
}

loop();
