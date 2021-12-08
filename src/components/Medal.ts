import DrawImage from '@src/interfaces/DrawImage';
import { context, sprites } from '@src/util/sprites';

class Medal {
  platinum: DrawImage = {
    image: sprites,
    spriteX: 0,
    spriteY: 78,
    spriteWidth: 45,
    spriteHeight: 45,
    canvasX: 73,
    canvasY: 137,
    canvasWidth: 45,
    canvasHeight: 45,
    show: () => {
      context.drawImage(
        this.platinum.image,
        this.platinum.spriteX,
        this.platinum.spriteY,
        this.platinum.spriteWidth,
        this.platinum.spriteHeight,
        this.platinum.canvasX,
        this.platinum.canvasY,
        this.platinum.canvasWidth,
        this.platinum.canvasHeight
      );
    },
  };

  gold: DrawImage = {
    image: sprites,
    spriteX: 0,
    spriteY: 123,
    spriteWidth: 45,
    spriteHeight: 45,
    canvasX: 73,
    canvasY: 137,
    canvasWidth: 45,
    canvasHeight: 45,
    show: () => {
      context.drawImage(
        this.gold.image,
        this.gold.spriteX,
        this.gold.spriteY,
        this.gold.spriteWidth,
        this.gold.spriteHeight,
        this.gold.canvasX,
        this.gold.canvasY,
        this.gold.canvasWidth,
        this.gold.canvasHeight
      );
    },
  };

  silver: DrawImage = {
    image: sprites,
    spriteX: 48,
    spriteY: 78,
    spriteWidth: 45,
    spriteHeight: 45,
    canvasX: 73,
    canvasY: 137,
    canvasWidth: 45,
    canvasHeight: 45,
    show: () => {
      context.drawImage(
        this.silver.image,
        this.silver.spriteX,
        this.silver.spriteY,
        this.silver.spriteWidth,
        this.silver.spriteHeight,
        this.silver.canvasX,
        this.silver.canvasY,
        this.silver.canvasWidth,
        this.silver.canvasHeight
      );
    },
  };

  bronze: DrawImage = {
    image: sprites,
    spriteX: 48,
    spriteY: 124,
    spriteWidth: 45,
    spriteHeight: 45,
    canvasX: 73,
    canvasY: 137,
    canvasWidth: 45,
    canvasHeight: 45,
    show: () => {
      context.drawImage(
        this.bronze.image,
        this.bronze.spriteX,
        this.bronze.spriteY,
        this.bronze.spriteWidth,
        this.bronze.spriteHeight,
        this.bronze.canvasX,
        this.bronze.canvasY,
        this.bronze.canvasWidth,
        this.bronze.canvasHeight
      );
    },
  };
}

export default new Medal();
