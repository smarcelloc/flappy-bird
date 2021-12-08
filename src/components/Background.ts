import DrawImage from '@src/interfaces/DrawImage';
import { canvas, context, sprites } from '@src/util/sprites';

class Background implements DrawImage {
  image = sprites;
  spriteX = 390;
  spriteY = 0;
  spriteWidth = 276;
  spriteHeight = 204;
  canvasWidth = canvas.width;
  canvasHeight = this.spriteHeight;
  canvasX = 0;
  canvasY = canvas.height - this.canvasHeight;

  show() {
    context.fillStyle = '#70c5ce';
    context.fillRect(0, 0, canvas.width, canvas.height);

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

export default Background;
