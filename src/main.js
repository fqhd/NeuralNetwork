function setup() {
  createCanvas(500, 500);
  let nn = new NeuralNetwork(2, 2, 1);
  let inputs = [1, 0];
  let targets = [1];
  nn.train(inputs, targets);

  
}
function draw() {
  background(200);
}
