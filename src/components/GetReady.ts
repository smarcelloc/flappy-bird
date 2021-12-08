import DrawImage from '@src/interfaces/DrawImage';
import { canvas, context, sprites } from '@src/util/sprites';

class GetReady implements DrawImage {
  image = sprites;
  spriteX = 133;
  spriteY = 0;
  spriteWidth = 176;
  spriteHeight = 152;
  canvasWidth = this.spriteWidth;
  canvasHeight = this.spriteHeight;
  canvasX = Math.floor(canvas.width / 2 - this.canvasWidth / 2);
  canvasY = 50;

  show(): void {
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

export default new GetReady();
