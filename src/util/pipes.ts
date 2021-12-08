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

    const pipesXstart = pipes.pipeDown.canvasX;
    const pipesXend = pipesXstart + pipes.pipeDown.canvasWidth;

    const pipeDownY = pipes.pipeDown.canvasY;
    const pipeUpY = pipes.pipeUp.canvasY + pipes.pipeUp.canvasHeight;

    const areaCollisionXstart = pipesXstart < flappyFront;
    const areaCollisionXend = pipesXend > flappyCoast;

    const areaCollisionYstart = pipeUpY > flappyHead;
    const areaCollisionYend = pipeDownY < flappyFoot;

    if (
      areaCollisionXstart &&
      areaCollisionXend &&
      (areaCollisionYstart || areaCollisionYend)
    ) {
      callback();
    }
  },
};

export default PipesUtil;
