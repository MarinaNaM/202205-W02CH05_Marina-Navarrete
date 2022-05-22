import { countNeighbor } from './app.js';
let hive = [
  [0, 1, 0, 1, 0],
  [1, 0, 0, 1, 1],
  [1, 0, 1, 0, 1],
  [0, 1, 0, 1, 0],
  [1, 0, 0, 1, 1],
];

describe('Given countNeighbor function', () => {
  describe('When recieve hive[0][0]', () => {
    let newArray = countNeighbor(hive);
    let result;
    result = newArray[0][0];
    test('In newArray[0][0] then it should return 0 ', () => {
      expect(result).toBe(0);
    });
  });
  describe('When recieve hive, 0,4', () => {
    let newArray = countNeighbor(hive);
    let result;
    result = newArray[0][4];
    test('In newArray[0][4] then it should return 1 ', () => {
      expect(result).toBe(1);
    });
  });
  describe('When recieve hive, 4,0', () => {
    let newArray = countNeighbor(hive);
    let result;
    result = newArray[4][0];
    test('In newArray[4][0] then it should return 0 ', () => {
      expect(result).toBe(0);
    });
  });
  describe('When recieve hive, 4,4', () => {
    let newArray = countNeighbor(hive);
    let result;
    result = newArray[4][4];
    test('In newArray[4][4] then it should return 1 ', () => {
      expect(result).toBe(1);
    });
  });
  describe('When recieve hive, 2,0', () => {
    let newArray = countNeighbor(hive);
    let result;
    result = newArray[2][0];
    test('In newArray[2][0] then it should return 1 ', () => {
      expect(result).toBe(1);
    });
  });
  describe('When recieve hive, 0,2', () => {
    let newArray = countNeighbor(hive);
    let result;
    result = newArray[0][2];
    test('In newArray[0][2] then it should return 1 ', () => {
      expect(result).toBe(1);
    });
  });
  describe('When recieve hive, 2,4', () => {
    let newArray = countNeighbor(hive);
    let result;
    result = newArray[2][4];
    test('In newArray[2][4] then it should return 1 ', () => {
      expect(result).toBe(1);
    });
  });
  describe('When recieve hive, 4,2', () => {
    let newArray = countNeighbor(hive);
    let result;
    result = newArray[4][2];
    test('In newArray[4][2] then it should return 1 ', () => {
      expect(result).toBe(1);
    });
  });
  describe('When recieve hive, 2,2', () => {
    let newArray = countNeighbor(hive);
    let result;
    result = newArray[2][2];
    test('In newArray[2][2] then it should return 1 ', () => {
      expect(result).toBe(1);
    });
  });
  describe('When recieve hive, 1,1', () => {
    let newArray = countNeighbor(hive);
    let result;
    result = newArray[1][1];
    test('In newArray[1][1] then it should return 0 ', () => {
      expect(result).toBe(0);
    });
  });
  describe('When recieve hive, 1,3', () => {
    let newArray = countNeighbor(hive);
    let result;
    result = newArray[1][3];
    test('In newArray[1][3] then it should return 0 ', () => {
      expect(result).toBe(0);
    });
  });
  describe('When recieve hive, 3,1', () => {
    let newArray = countNeighbor(hive);
    let result;
    result = newArray[3][1];
    test('In newArray[3][1] then it should return 1 ', () => {
      expect(result).toBe(1);
    });
  });
  describe('When recieve hive, 3,3', () => {
    let newArray = countNeighbor(hive);
    let result;
    result = newArray[3][3];
    test('In newArray[3][3] then it should return 0 ', () => {
      expect(result).toBe(0);
    });
  });
  describe('When recieve hive, 2,3', () => {
    let newArray = countNeighbor(hive);
    let result;
    result = newArray[2][3];
    test('In newArray[2][3] then it should return 0 ', () => {
      expect(result).toBe(0);
    });
  });
});
