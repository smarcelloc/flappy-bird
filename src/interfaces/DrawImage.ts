interface DrawImage {
  image: HTMLImageElement;
  spriteX: number;
  spriteY: number;
  spriteWidth: number;
  spriteHeight: number;
  canvasWidth: number;
  canvasHeight: number;
  canvasX: number;
  canvasY: number;
  show(): void;
}

export default DrawImage;
