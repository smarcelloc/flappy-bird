import { screenInit } from './screen';
import screenEventAction from './util/screenEventAction';

global.screenCurrent = screenInit;

function loop() {
  global.screenCurrent.show();
  global.screenCurrent.update();
  screenEventAction();
  requestAnimationFrame(loop);
}

loop();
