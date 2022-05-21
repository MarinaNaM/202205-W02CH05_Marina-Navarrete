import { countNeighbor } from './app3.js';
let hive = [
  [0, 1, 0, 1, 0],
  [1, 0, 0, 1, 1],
  [1, 0, 1, 0, 1],
  [0, 1, 0, 1, 0],
  [1, 0, 0, 1, 1],
];

describe('Given countNeighbor function', () => {
  describe('When recieve hive, 0,0', () => {
    test('Then it should return 2', () => {
      let coord1 = 0;
      let coord2 = 0;
      let expectedResult = 2;
      expect(countNeighbor(hive, coord1, coord2)).toBe(expectedResult);
    });
  });
  describe('When recieve hive, 0,4', () => {
    test('Then it should return 3', () => {
      let coord1 = 0;
      let coord2 = 4;
      let expectedResult = 3;
      expect(countNeighbor(hive, coord1, coord2)).toBe(expectedResult);
    });
  });
});
