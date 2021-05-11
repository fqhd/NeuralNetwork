const trainingData = [
     {
          inputs: [0, 1],
          targets: [1]
     },
     {
          inputs: [1, 0],
          targets: [1]
     },
     {
          inputs: [1, 1],
          targets: [0]
     },
     {
          inputs: [0, 0],
          targets: [0]
     }
];

function setup() {
     createCanvas(500, 500);
     let nn = new NeuralNetwork(2, 2, 1);

     for(let i = 0; i < 50000; i++){
          let data = random(trainingData);
          nn.train(data.inputs, data.targets);
     }

     console.log(nn.feedforward([0, 1]));
     console.log(nn.feedforward([1, 0]));
     console.log(nn.feedforward([1, 1]));
     console.log(nn.feedforward([0, 0]));

}

function draw() {
     background(200);
}
