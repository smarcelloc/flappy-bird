interface DrawImage {
  image: HTMLImageElement;
  spriteX: number;
  spriteY: number;
  spriteWidth: number;
  spriteHeight: number;
  canvasX: number;
  canvasY: number;
  canvasWidth: number;
  canvasHeight: number;
  show(): void;
}

export default DrawImage;
