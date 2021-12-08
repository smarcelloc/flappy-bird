import DrawImage from '@src/interfaces/DrawImage';
import { canvas, context, sprites } from '@src/util/sprites';

class Floor implements DrawImage {
  image = sprites;
  spriteX = 0;
  spriteY = 610;
  spriteWidth = 224;
  spriteHeight = 112;
  canvasWidth = canvas.width;
  canvasHeight = this.spriteHeight;
  canvasX = 0;
  canvasY = canvas.height - this.canvasHeight;

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

export default Floor;
