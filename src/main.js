function setup() {
  createCanvas(500, 500);
  let nn = new NeuralNetwork(2, 2, 1);
  let input = [1, 0];
  let output = nn.feedforward(input);
  console.log(output);
  
}
function draw() {
  background(200);
}
