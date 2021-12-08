import spritesImage from './assets/sprites.png';

const sprites = new Image();
sprites.src = spritesImage;

const canvas: HTMLCanvasElement | null = document.querySelector('canvas#root');
const context = canvas?.getContext('2d');

function loop() {
  context?.drawImage(sprites, 0, 0, 35, 24, 25, 50, 35, 24);
  requestAnimationFrame(loop);
}

loop();
