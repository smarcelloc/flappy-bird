import DrawImage from '@src/interfaces/DrawImage';
import { context, sprites } from '@src/util/sprites';

class FlappyBird implements DrawImage {
  image = sprites;
  spriteX = 0;
  spriteY = 0;
  spriteWidth = 35;
  spriteHeight = 24;
  canvasWidth = this.spriteWidth;
  canvasHeight = this.spriteHeight;
  canvasX = 25;
  canvasY = 50;

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
}

export default FlappyBird;
