let hive = [
  [0, 1, 0, 1, 0],
  [1, 0, 0, 1, 1],
  [1, 0, 1, 0, 1],
  [0, 1, 0, 1, 0],
  [1, 0, 0, 1, 1],
];

let hive2 = [
  [0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0],
];

let counter = 0;

export function countNeighbor(array) {
  for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < array[i].length; j++) {
      counter = 0;
      if (i === 0 && j === 0) {
        if (array[i][j + 1] === 1) {
          counter++;
        }
        if (array[i + 1][j] === 1) {
          counter++;
        }
        if (array[i + 1][j + 1] === 1) {
          counter++;
        }
      } else if (i === 0 && j < array.length && j !== 0) {
        if (array[i][j - 1] === 1) {
          counter++;
        }
        if (array[i][j + 1] === 1) {
          counter++;
        }
        if (array[i + 1][j - 1] === 1) {
          counter++;
        }
        if (array[i + 1][j] === 1) {
          counter++;
        }
        if (array[i + 1][j + 1] === 1) {
          counter++;
        }
      } else if (i === 0 && j === array[i].length) {
        if (array[i - 1][j - 1] === 1) {
          counter++;
        }
        if (array[i][j - 1] === 1) {
          counter++;
        }
        if (array[i + 1][j] === 1) {
          counter++;
        }
      } else if (i === array.length - 1 && j === 0) {
        if (array[i][j + 1] === 1) {
          counter++;
        }
        if (array[i - 1][j + 1] === 1) {
          counter++;
        }
        if (array[i - 1][j] === 1) {
          counter++;
        }
      } else if (i === array.length - 1 && j < array[i].length && j !== 0) {
        if (array[i - 1][j] === 1) {
          counter++;
        }
        if (array[i][j + 1] === 1) {
          counter++;
        }
        if (array[i - 1][j - 1] === 1) {
          counter++;
        }
        if (array[i - 1][j + 1] === 1) {
          counter++;
        }
        if (array[i][j - 1] === 1) {
          counter++;
        }
      } else if (i === array[i].length && j !== 0) {
        if (array[i][j - 1] === 1) {
          counter++;
        }
        if (array[i - 1][j - 1] === 1) {
          counter++;
        }
        if (array[i - 1][j] === 1) {
          counter++;
        }
      } else {
        if (array[i][j - 1] === 1) {
          counter++;
        }
        if (array[i][j + 1] === 1) {
          counter++;
        }
        if (array[i - 1][j] === 1) {
          counter++;
        }
        if (array[i + 1][j] === 1) {
          counter++;
        }
        if (array[i - 1][j - 1] === 1) {
          counter++;
        }
        if (array[i + 1][j + 1] === 1) {
          counter++;
        }
        if (array[i - 1][j + 1] === 1) {
          counter++;
        }
        if (array[i + 1][j - 1] === 1) {
          counter++;
        }
      }
      if (array[i][j] === 1) {
        if (counter > 3 || counter < 2) {
          hive2[i][j] = 0;
        }
        if (counter === 2 || counter === 3) {
          hive2[i][j] = 1;
        }
      } else {
        if (counter < 3) {
          hive2[i][j] = 0;
        }
        if (counter === 3) {
          hive2[i][j] = 1;
        }
      }
    }
  }
  return hive2;
}

countNeighbor(hive);

console.log(hive2);
