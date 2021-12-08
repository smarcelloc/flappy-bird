import { screenInit } from './screen';

global.screenCurrent = screenInit;

function loop() {
  global.screenCurrent.show();
  global.screenCurrent.update();
  requestAnimationFrame(loop);
}

loop();
