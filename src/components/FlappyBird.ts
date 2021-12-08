import DrawImage from '@src/interfaces/DrawImage';
import { effectHit } from '@src/util/sounds';
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

  flying = 0;
  moving = 0;

  speed = 0;
  gravity = 0.25;
  jumpHeight = 5;

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
    this.speed += this.gravity;
    this.canvasY = Math.floor(this.canvasY + this.speed);
  }

  jump() {
    if (this.canvasY > this.canvasHeight) {
      this.speed = -this.jumpHeight;
    }
  }

  sounds = {
    hit: () => effectHit.play(),
  };

  winds = [
    { spriteX: 0, spriteY: 0 }, // wind position from up
    { spriteX: 0, spriteY: 26 }, // wind position from middle
    { spriteX: 0, spriteY: 52 }, // wind position from down
  ];

  fly() {
    const speedWind = 10;
    this.flying++;

    if (this.flying % speedWind === 0) {
      const moving = this.flying % 3;
      this.spriteY = this.winds[moving].spriteY;
    }
  }

  reset() {
    this.canvasX = 25;
    this.canvasY = 50;
    this.flying = 0;
    this.moving = 0;
    this.speed = 0;
    this.gravity = 0.25;
    this.jumpHeight = 5;
  }
}

export default new FlappyBird();
