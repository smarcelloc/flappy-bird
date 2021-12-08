import { canvas, context } from '@src/util/sprites';

class Score {
  private score = 0;
  frame = 0;
  intervalScore = 50;

  styles = {
    color: 'white',
    shadowColor: 'black',
    fontSize: 35,
    canvasX: canvas.width - 20,
    canvasY: 50,
  };

  show(score?: number) {
    context.font = `${this.styles.fontSize}px monospace`;

    // Text Shadow
    context.lineWidth = 3;
    context.shadowColor = this.styles.shadowColor;
    context.strokeText(
      `${score ?? this.score}`,
      this.styles.canvasX,
      this.styles.canvasY
    );

    // Text normal
    context.fillStyle = this.styles.color;
    context.textAlign = 'right';
    context.fillText(
      `${score ?? this.score}`,
      this.styles.canvasX,
      this.styles.canvasY
    );
  }

  scoring() {
    this.frame++;
    this.frame %= this.intervalScore;

    if (this.frame === 0) {
      this.score++;
    }
  }

  reset() {
    this.styles.color = 'white';
    this.styles.shadowColor = 'black';
    this.styles.fontSize = 35;
    this.styles.canvasX = canvas.width - 20;
    this.styles.canvasY = 50;

    this.score = 0;
    this.frame = 0;
  }
}

export default Score;
