class Point {
  constructor() {
    this.x = Math.random() * width;
    this.y = Math.random() * height;
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
    ellipse(this.x, this.y, 8, 8);
  }
}
