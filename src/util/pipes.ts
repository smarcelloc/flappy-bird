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

  break(callback: () => void) {
    const pipes = listPipes[0] ?? new Pipes();

    const flappyHead = FlappyBird.canvasY;
    const flappyFoot = flappyHead + FlappyBird.canvasHeight;
    const flappyCoast = FlappyBird.canvasX;
    const flappyFront = flappyCoast + FlappyBird.canvasWidth;

    const pipesX1 = pipes.pipeDown.canvasX;
    const pipesX2 = pipesX1 + pipes.pipeDown.canvasWidth;

    const pipeDownY = pipes.pipeDown.canvasY;
    const pipeUpY = pipes.pipeUp.canvasY + pipes.pipeUp.canvasHeight;

    const areaXinit = pipesX1 < flappyFront;
    const areaXend = pipesX2 > flappyCoast;

    const areaYinit = pipeUpY > flappyHead;
    const areaYend = pipeDownY < flappyFoot;

    if (areaXinit && areaXend && (areaYinit || areaYend)) {
      callback();
    }
  },
};

export default PipesUtil;
