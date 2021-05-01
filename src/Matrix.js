class Matrix {
  constructor(rows, cols) {
    this.rows = rows;
    this.cols = cols;
    this.data = [];

    for (let i = 0; i < rows; i++) {
      this.data[i] = [];
      for (let j = 0; j < cols; j++) {
        this.data[i][j] = 0;
      }
    }
  }

  static subtract(a, b){
    if(a.rows != b.rows || a.cols != b.cols){
      console.log("Rows and Columns must match those of B");
      return;
    }
    let output = new Matrix(a.rows, a.cols);
    for(let i = 0; i < a.cols; i++){
      for(let j = 0; j < a.rows; j++){
        output.data[i][j] = a.data[i][j] - b.data[i][j];
      }
    }
    return output;
  }

  static toArray(matrix){
    let arr = [];
    for(let i = 0; i < matrix.rows; i++){
      for(let j = 0; j < matrix.cols; j++){
        arr.push(matrix.data[i][j]);
      }
    }
    return arr;
  }

  static fromArray(array){
    let m = new Matrix(array.length, 1);
    for(let i = 0; i < array.length; i++){
      m.data[i][0] = array[i];
    }
    return m;
  }


  static transpose(m) {
    let output = new Matrix(m.cols, m.rows);
    for (let i = 0; i < m.rows; i++) {
      for (let j = 0; j < m.cols; j++) {
        output.data[j][i] = m.data[i][j];
      }
    }
    return output;
  }

  static multiply(m1, m2) {
    if (m1.cols !== m2.rows) {
      console.log("Columns of A must match rows of B");
      return;
    }
    let output = new Matrix(m1.rows, m2.cols);
    for (let i = 0; i < output.rows; i++) {
      for (let j = 0; j < output.cols; j++) {
        let product = 0;
        for (let k = 0; k < m1.cols; k++) {
          product += m1.data[i][k] * m2.data[k][j];
        }
        output.data[i][j] = product;
      }
    }
    return output;
  }
}

Matrix.prototype.map = function(func){
  for(let i = 0; i < this.rows; i++){
    for(let j = 0; j < this.cols; j++){
      this.data[i][j] = func(this.data[i][j]);
    }
  }
}

Matrix.prototype.print = function() {
  console.table(this.data);
}

Matrix.prototype.randomize = function() {
  for (let i = 0; i < this.rows; i++) {
    for (let j = 0; j < this.cols; j++) {
      this.data[i][j] = Math.random() * 2 - 1;
    }
  }
}

Matrix.prototype.add = function(n) {
  if (n instanceof Matrix) {
    for (let i = 0; i < this.rows; i++) {
      for (let j = 0; j < this.cols; j++) {
        this.data[i][j] += n.data[i][j];
      }
    }
  } else {
    for (let i = 0; i < this.rows; i++) {
      for (let j = 0; j < this.cols; j++) {
        this.data[i][j] += n;
      }
    }
  }
}

Matrix.prototype.multiply = function(n) {
  if(this.rows != n.rows || this.cols != n.cols){
    console.log("N rows must match this columns");
    return;
  }
  if(n instanceof Matrix){
    for(let i = 0; i < n.rows; i++){
      for(let j = 0; j < n.cols; j++){
        this.data[i][j] = this.data[i][j] * n.data[i][j];
      }
    }
  } else {
    for (let i = 0; i < this.rows; i++) {
      for (let j = 0; j < this.cols; j++) {
        this.data[i][j] *= n;
      }
    }
  }
}
