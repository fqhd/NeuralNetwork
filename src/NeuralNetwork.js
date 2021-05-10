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

NeuralNetwork.prototype.train = function(input, targets){

  let inputs = Matrix.fromArray(input);
  let hidden = Matrix.multiply(this.hiddenWeights, inputs);
  hidden.add(this.hiddenBias);
  hidden.map(sigmoid);

  let outputs = Matrix.multiply(this.outputWeights, hidden);
  outputs.add(this.outputBias);
  outputs.map(sigmoid);

  targets = Matrix.fromArray(targets);

  let outputErrors = Matrix.subtract(targets, outputs);

  let gradients = Matrix.map(outputs, dsigmoid);
  gradients.multiply(outputErrors);
  gradients.multiply(this.learningRate);

  let hiddenT = Matrix.transpose(hidden);
  let hiddenWeightDeltas = Matrix.multiply(gradients, hiddenT);

  this.outputWeights.add(hiddenWeightDeltas);

  let transposedOutputWeights = Matrix.transpose(this.outputWeights);
  let hiddenErrors = Matrix.multiply(transposedOutputWeights, dsigmoid);

  // Calculate hidden gradient
  let hiddenGradient = Matrix.map(hidden, dsigmoid);
  hiddenGradient.multiply(hiddenErrors);
  hiddenGradient.multiply(this.learningRate);

  // Calculate input->hidden deltas
  let inputsT = Matrix.transpose(inputs);
  let hiddenDeltas = Matrix.multiply(hiddenGradient, inputsT);

  this.hiddenWeights.add(hiddenDeltas);
}
