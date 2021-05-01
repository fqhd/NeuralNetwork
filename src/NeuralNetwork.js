function sigmoid(x){
  return 1 / (1 + Math.exp(-x));
}

function dsigmoid(y){
  return y * (1 - y);
}

class NeuralNetwork {
  constructor(_inputNodes, _hiddenNodes, _outputNodes){
    this.inputNodes = _inputNodes;
    this.hiddenNodes = _hiddenNodes;
    this.outputNodes = _outputNodes;

    // The weights to weighted sum for the hidden layer
    // Outputs of this layer are going to be the inputs for the hidden layer
    this.hiddenWeights = new Matrix(_inputNodes, _hiddenNodes);

    // The weights to calculate the weighted sum for the output layer
    this.outputWeights = new Matrix(_outputNodes, _hiddenNodes);

    //Randomizing the matrices
    this.hiddenWeights.randomize();
    this.outputWeights.randomize();

    // We are also going to need biases for each weighted sum
    // These only need to be one dimentional because we are going to have one bias per weighted sum, not per perceptron
    this.hiddenBias = new Matrix(_hiddenNodes, 1);
    this.outputBias = new Matrix(_outputNodes, 1);

    // Randomizing the biases
    this.hiddenBias.randomize();
    this.outputBias.randomize();
    this.learningRate = 0.1;
  }
}

NeuralNetwork.prototype.feedforward = function(inputs){

  let inputMatrix = Matrix.fromArray(inputs);

  // Calculating outputs of hidden from inputs
  let hidden = Matrix.multiply(this.hiddenWeights, inputMatrix);
  hidden.add(this.hiddenBias);
  hidden.map(sigmoid);

  // Calculating outputs of outputs from outputs of hidden
  let output = Matrix.multiply(this.outputWeights, hidden);
  output.add(this.outputBias);
  output.map(sigmoid);

  return Matrix.toArray(output);
}

NeuralNetwork.prototype.train = function(inputs, targets){

  // Calculating outputs of hidden from inputs
  let hidden = Matrix.multiply(this.hiddenWeights, inputMatrix);
  hidden.add(this.hiddenBias);
  hidden.map(sigmoid);

  // Calculating outputs of the output layer from outputs of hidden
  let output = Matrix.multiply(this.outputWeights, hidden);
  output.add(this.outputBias);
  output.map(sigmoid);

  // Convert outputs and targets to matrix
  outputs = Matrix.fromArray(outputs); // AKA Our guess
  targets = Matrix.fromArray(targets);

  // Calculating output errors(How far off we are)
  let outputErrors = Matrix.subtract(targets, outputs);

  // Calculate hidden errors(How far off the hidden weights are)
  let transposedWeightMatrix = Matrix.transpose(this.hiddenWeights);
  let hiddenErrors = Matrix.multiply(transposedWeightMatrix, outputErrors);

  // Calculate the output delta weights(Used to tweak the weights)
  outputs.map(dsigmoid);
  outputs.multiply(outputErrors);
  outputs.multiply(this.learningRate);

  // Calculating the output delta weights(Used to tweak the weightss conditions);

  outputs.print();
  targets.print();
  errors.print();

}
