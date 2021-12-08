import { canvas, context } from '@src/util/sprites';
import Metal from './Medal';

const SCORE_BEST_KEY = 'SCORE_BEST';

class Score {
  private score = 0;
  private scoreBest = 0;
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

  showScoreboard() {
    this.styles.color = 'white';
    this.styles.fontSize = 20;
    this.styles.canvasX = 250;
    this.styles.canvasY = 142;
    this.show();
  }

  showBest() {
    this.styles.color = 'yellow';
    this.styles.fontSize = 20;
    this.styles.canvasX = 250;
    this.styles.canvasY = 182;

    this.localStorageScoreBest();

    this.show(this.scoreBest);
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
    this.scoreBest = 0;
    this.frame = 0;
  }

  showMedal() {
    if (this.score > 20 && this.score <= 40) {
      Metal.bronze.show();
    } else if (this.score > 40 && this.score <= 80) {
      Metal.silver.show();
    } else if (this.score > 80 && this.score <= 150) {
      Metal.gold.show();
    } else if (this.score > 150) {
      Metal.platinum.show();
    }
  }

  private localStorageScoreBest() {
    if (this.scoreBest !== 0) {
      return;
    }

    this.scoreBest = parseInt(localStorage.getItem(SCORE_BEST_KEY) ?? '0');

    if (this.scoreBest < this.score) {
      localStorage.setItem(SCORE_BEST_KEY, `${this.score}`);
      this.scoreBest = this.score;
    }
  }
}

export default new Score();
