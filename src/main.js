let perceptron = new Perceptron();
let points = [];
let guessPoints = [];

function setup() {
  createCanvas(500, 500);

  // Adding the points
  for (let i = 0; i < 1000; i++) {
    points.push(new Point());
  }

  // Training our amazing little perceptron with a known set of points :)
  for (p of points) {
    let inputs = [p.x, p.y, 1];
    perceptron.train(inputs, p.label);
  }

  // Classifying a set of points based on the guesses of our trained perceptron
  for (let i = 0; i < 100; i++) {
    let p = new Point();
    let inputs = [p.x, p.y];
    p.label = perceptron.guess(inputs);
    guessPoints.push(p);
  }

}


function draw() {
  background(200);
  for (p of guessPoints) {
    p.draw();
  }
}
