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
};

export default PipesUtil;
