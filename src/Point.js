function f(x) {
     return 3 * x + 2;
}


class Point {
     constructor() {
          this.x = Math.random() * 2 - 1;
          this.y = Math.random() * 2 - 1;
          this.pixelX = ((this.x + 1) / 2) * width;
          this.pixelY = (1 - ((this.y + 1) / 2)) * height;

          //Determining whether the point is above or below the line
          let lineY = f(this.x);
          if (this.y > lineY) {
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
