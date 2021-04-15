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

}
