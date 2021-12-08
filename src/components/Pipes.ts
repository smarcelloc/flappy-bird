import DrawImage from '@src/interfaces/DrawImage';
import { canvas, context, sprites } from '@src/util/sprites';

class Pipes {
  pipeUp: DrawImage = {
    image: sprites,
    spriteX: 52,
    spriteY: 169,
    spriteWidth: 52,
    spriteHeight: 400,
    canvasWidth: 52,
    canvasHeight: 400,
    canvasX: -100,
    canvasY: 0,
    show: () => {
      context.drawImage(
        this.pipeUp.image,
        this.pipeUp.spriteX,
        this.pipeUp.spriteY,
        this.pipeUp.spriteWidth,
        this.pipeUp.spriteHeight,
        this.pipeUp.canvasX,
        this.pipeUp.canvasY,
        this.pipeUp.canvasWidth,
        this.pipeUp.canvasHeight
      );
    },
  };

  pipeDown: DrawImage = {
    image: sprites,
    spriteX: 0,
    spriteY: 169,
    spriteWidth: 52,
    spriteHeight: 400,
    canvasWidth: 52,
    canvasHeight: 400,
    canvasX: -100,
    canvasY: 0,
    show: () => {
      context.drawImage(
        this.pipeDown.image,
        this.pipeDown.spriteX,
        this.pipeDown.spriteY,
        this.pipeDown.spriteWidth,
        this.pipeDown.spriteHeight,
        this.pipeDown.canvasX,
        this.pipeDown.canvasY,
        this.pipeDown.canvasWidth,
        this.pipeDown.canvasHeight
      );
    },
  };

  moving = canvas.width;
  speed = 2;
  spaceBetweenPipes = 24 * 5; // 24px height of Flappy Bird

  show() {
    this.pipeUp.show();
    this.pipeDown.show();
  }

  move() {
    this.moving -= this.speed;
    this.pipeUp.canvasX = this.moving;
    this.pipeDown.canvasX = this.moving;
  }

  generate() {
    const max = 360;
    const min = 200;
    const randomY = Math.floor(Math.random() * (max - min) + min);

    this.pipeUp.canvasY = -randomY;
    this.pipeDown.canvasY =
      this.pipeUp.canvasHeight + this.spaceBetweenPipes - randomY;
  }
}

export default Pipes;
