import DrawImage from '@src/interfaces/DrawImage';
import { canvas, context, sprites } from '@src/util/sprites';

class Floor implements DrawImage {
  image = sprites;
  spriteX = 0;
  spriteY = 610;
  spriteWidth = 224;
  spriteHeight = 112;
  canvasWidth = canvas.width + 200;
  canvasHeight = this.spriteHeight;
  canvasX = -100;
  canvasY = canvas.height - this.canvasHeight;

  moving = 0;
  speed = 5;
  repeatInMoving = 20;

  show() {
    context.drawImage(
      this.image,
      this.spriteX,
      this.spriteY,
      this.spriteWidth,
      this.spriteHeight,
      this.canvasX,
      this.canvasY,
      this.canvasWidth,
      this.canvasHeight
    );
  }

  move() {
    this.moving--;
    this.canvasX = this.moving * this.speed;
    this.moving %= this.repeatInMoving;
  }
}

export default new Floor();
