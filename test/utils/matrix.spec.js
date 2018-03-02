import { expect } from 'chai';
import { getSize, getColumn, getDiagonals, Matrix } from '../../src/utils/matrix.js';

describe('matrixUtils', function() {
  let matrix;
  beforeEach(() => {
    matrix = [
      [0, 0, 0, 0],
      [2, 0, 0, 0],
      [0, 0, 0, 2],
      [0, 0, 0, 0],
    ];
  });

  describe('getSize', function() {
    it('should be a function', function() {
      expect(typeof getSize).to.equal('function');
    });

    it('should return a count of all the cells in a give matrix', function() {
      expect(getSize(matrix)).to.equal(16);
    });
  });

  describe('getColumn', function() {
    it('should be a function', function() {
      expect(typeof getColumn).to.equal('function');
    });

    it('should return an array with all of the values in a column of an array matrix', function() {
      expect(getColumn(matrix, 0)).to.deep.equal([0, 2, 0, 0]);
      expect(getColumn(matrix, 1)).to.deep.equal([0, 0, 0, 0]);
      expect(getColumn(matrix, 2)).to.deep.equal([0, 0, 0, 0]);
      expect(getColumn(matrix, 3)).to.deep.equal([0, 0, 2, 0]);
    });
  });

  describe('Matrix', function() {
    it('construct a matrix', function() {
      expect(typeof Matrix).to.equal('function');
      let createdMatrix = new Matrix();
      expect(createdMatrix instanceof Array).to.equal(true);
      expect(createdMatrix[0] instanceof Array).to.equal(true);
    });

    it('should create a default board', function() {
      expect(new Matrix()).to.deep.equal(matrix);
    });
  });
});