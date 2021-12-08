import spritesImage from '@src/assets/sprites.png';

const sprites = new Image();
sprites.src = spritesImage;

const canvas: HTMLCanvasElement | null = document.querySelector('canvas#root');

if (!canvas) {
  throw new Error('Is not identified the element canvas');
}

const context = canvas.getContext('2d');

export { sprites, canvas, context };
