function sigmoid(x){
  return 1 / (1 + Math.exp(-x));
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
  }
}

NeuralNetwork.prototype.feedforward = function(input){

  // Turn input array into matrix
  let inputMatrix = Matrix.fromArray(input);

  // Getting the weighted sum of all the inputs and their weights
  let hidden = Matrix.multiply(this.hiddenWeights, inputMatrix);

  // Adding the biases to all the weighted sums
  hidden.add(this.hiddenBias);

  // Mapping all of the hidden values between 0 and 1 using the sigmoid function
  hidden.map(sigmoid);

  // Repeating the same thing we just did but to calculate
  let output = Matrix.multiply(this.outputWeights, hidden);
  output.add(this.outputBias);
  output.map(sigmoid);

  return Matrix.toArray(output);
}
