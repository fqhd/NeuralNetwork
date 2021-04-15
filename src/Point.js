class Point {
  constructor() {
    this.x = Math.random() * 2 - 1;
    this.y = Math.random() * 2 - 1;
    this.pixelX = ((this.x + 1) / 2) * width;
    this.pixelY = ((this.y + 1) / 2) * height;

    if (this.x > this.y) {
      this.label = 1;
    } else {
      this.label = -1;
    }
  }

  draw() {
    stroke(0);
    if (this.label == 1) {
      fill(255);
    } else {
      fill(0);
    }
    ellipse(this.pixelX, this.pixelY, 8, 8);
  }
}
