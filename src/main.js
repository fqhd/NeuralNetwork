let perceptron = new Perceptron();
let points = [];
let guessPoints = [];

function setup() {
  createCanvas(500, 500);
}

function func(n){
  return n * 0.5;
}


function draw() {
  background(200);
  for (p of guessPoints) {
    p.draw();
  }
}
