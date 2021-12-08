import FlappyBird from './components/FlappyBird';

const flappyBird = new FlappyBird();

function loop() {
  flappyBird.show();
  requestAnimationFrame(loop);
}

loop();
