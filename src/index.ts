import { screenInit } from './screen';

function loop() {
  screenInit.show();
  requestAnimationFrame(loop);
}

loop();
