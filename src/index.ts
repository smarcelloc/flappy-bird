import { context, sprites } from './util/sprites';

function loop() {
  context?.drawImage(sprites, 0, 0, 35, 24, 25, 50, 35, 24);
  requestAnimationFrame(loop);
}

loop();
