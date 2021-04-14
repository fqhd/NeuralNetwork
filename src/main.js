class Bubble {
  constructor(xPos, yPos){
    this.x = xPos;
    this.y = yPos;
  }

  draw(){
    ellipse(this.x, this.y, 100, 100);
  }
}

let bubble = new Bubble(100, 100);

function setup(){
  createCanvas(800, 600);
}


function draw(){
  background(255, 0, 0);
  bubble.draw();
}
