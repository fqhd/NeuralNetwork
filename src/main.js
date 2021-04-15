let perceptron = new Perceptron();
let points = [];

function setup() {
  createCanvas(500, 500);

  for(let i = 0; i < 100; i++){
    points.push(new Point());
  }

}


function draw() {
  background(200);
  for(p of points){
    p.draw();
  }
}
