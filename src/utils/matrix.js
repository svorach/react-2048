module.exports = {
  getSize: (matrix) => {
    let size = 0;

    for (let rowIndex = 0; rowIndex < matrix.length; rowIndex ++) {
      size += matrix[rowIndex].length;
    }

    return size;
  },

  getColumn: (matrix, columnIndex) => {
    const col = [];

    for (let rowIndex = 0; rowIndex < matrix.length; rowIndex ++) {
      col.push(matrix[rowIndex][columnIndex]);
    }

    return col;
  },

  getDiagonals: (matrix) => {
    const matrixLength = matrix[0].length;
    const downward = [];
    const upward = [];

    for (let i = 0; i < matrixLength; i ++) {
      downward.push(matrix[i][i]);
      upward.push(matrix[i][matrixLength - i - 1]);
    }

    return { downward, upward };
  },

  Matrix(size = 4) {
    const arr = () => new Array(size).join(',').split(',');
    const matrix = arr()
      .map(() => arr())
      .map((verticy) => verticy.map(() => 0)
    );

    matrix[1][0] = 2;
    matrix[2][3] = 2;

    return matrix;
  },
};
