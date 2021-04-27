class Matrix {
  constructor(rows, cols) {
    this.rows = rows;
    this.cols = cols;
    this.matrix = [];

    for (let i = 0; i < rows; i++) {
      this.matrix[i] = [];
      for (let j = 0; j < cols; j++) {
        this.matrix[i][j] = 0;
      }
    }
  }

  static multiply(m1, m2) {
    if (m1.cols !== m2.rows) {
      console.log("Columns of A must match rows of B");
      return;
    }
    let output = new Matrix(m1.rows, m2.cols);
    for (let i = 0; i < m1.rows; i++) {
      for (let j = 0; j < m2.cols; j++) {
        let product = 0;
        for (let k = 0; k < m2.rows; k++) {
          product += m1.matrix[i][k] * m2.matrix[k][j];
        }
        output.matrix[i][j] = product;
      }
    }
    return output;
  }

}

Matrix.prototype.map = function(func){
  for(let i = 0; i < this.rows; i++){
    for(let j = 0; j < this.cols; j++){
      this.matrix[i][j] = func(this.matrix[i][j]);
    }
  }
}

Matrix.prototype.print = function() {
  console.table(this.matrix);
}

Matrix.prototype.randomize = function() {
  for (let i = 0; i < this.rows; i++) {
    for (let j = 0; j < this.cols; j++) {
      this.matrix[i][j] = Math.floor(Math.random() * 10);
    }
  }
}

Matrix.prototype.add = function(n) {
  if (n instanceof Matrix) {
    for (let i = 0; i < this.rows; i++) {
      for (let j = 0; j < this.cols; j++) {
        this.matrix[i][j] += n.matrix[i][j];
      }
    }
  } else {
    for (let i = 0; i < this.rows; i++) {
      for (let j = 0; j < this.cols; j++) {
        this.matrix[i][j] += n;
      }
    }
  }
}

Matrix.prototype.transpose = function() {
  let output = new Matrix(this.cols, this.rows);
  for (let i = 0; i < this.rows; i++) {
    for (let j = 0; j < this.cols; j++) {
      output.matrix[j][i] = this.matrix[i][j];
    }
  }
  return output;
}

Matrix.prototype.multiply = function(n) {
  for (let i = 0; i < this.rows; i++) {
    for (let j = 0; j < this.cols; j++) {
      this.matrix[i][j] *= n;
    }
  }
}
