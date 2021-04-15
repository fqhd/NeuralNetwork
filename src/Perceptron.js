function sign(x) {
  if (x >= 0) {
    return 1;
  } else {
    return -1;
  }
}

class Perceptron {
  constructor() {
    //Initialize the weights randomly
    for (let i = 0; i < 2; i++) {
      this.weights = [];
      this.learningRate = 0.1;
      this.weights.push(Math.random() * 2 - 1);
      this.weights.push(Math.random() * 2 - 1);
    }
  }

  guess(inputs) {
    let sum = 0;
    for(let i = 0; i < 2; i++){
      sum += this.weights[i] * inputs[i];
    }
    let output = sign(sum);
    return output;
  }

  train(inputs, target){
    let guess = this.guess(inputs);
    let err = target - guess;

    for(let i = 0; i < inputs.length; i++){
      let deltaWeight = err * inputs[i];
      this.weights[i] += deltaWeight * this.learningRate;;
    }
  }

}
