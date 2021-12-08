import FlappyBird from '@src/components/FlappyBird';
import Pipes from '@src/components/Pipes';

let listPipes: Array<Pipes> = [];
let framePipes = 0;
const intervalFramePipes = 100;

const PipesUtil = {
  showMove() {
    listPipes.forEach((pipe) => {
      pipe.show();
      pipe.move();
    });
  },

  showBreak() {
    listPipes.forEach((pipe) => {
      pipe.speed = 0;
      pipe.show();
    });
  },

  generate() {
    framePipes++;
    framePipes %= intervalFramePipes;

    if (framePipes === 0) {
      const pipes = new Pipes();
      pipes.generate();
      listPipes.push(pipes);

      if (listPipes.length > 2) {
        listPipes.shift();
      }
    }
  },

  reset() {
    framePipes = 0;
    listPipes = [];
  },

  break(flappyBird: FlappyBird, callback: () => void) {
    const pipes = listPipes[0] ?? new Pipes();

    const areaXinit =
      pipes.pipeDown.canvasX < flappyBird.canvasX + flappyBird.canvasWidth;
    const areaXend = pipes.pipeDown.canvasX > 0;

    const flappyHead = flappyBird.canvasY;
    const flappyFoot = flappyBird.canvasHeight + flappyBird.canvasY;
    const pipeUpCanvasY = pipes.pipeDown.canvasHeight + pipes.pipeUp.canvasY;

    const areaYinit = pipeUpCanvasY > flappyHead;
    const areaYend = pipes.pipeDown.canvasY < flappyFoot;

    if (areaXinit && areaXend && (areaYinit || areaYend)) {
      callback();
    }
  },
};

export default PipesUtil;
