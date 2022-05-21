let hive = [
  [0, 1, 0, 1, 0],
  [1, 0, 0, 1, 1],
  [1, 0, 1, 0, 1],
  [0, 1, 0, 1, 0],
  [1, 0, 0, 1, 1],
];
console.log(hive);

let hive2 = [
  [1, 0, 0, 0, 0],
  [0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0],
];

export function countNeighbor(array, i, j) {
  let counter = 0;

  //Si está viva
  if (i === 0 && j === 0) {
    //esquina 1
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
  } else if (i === array.length && j === array[i].length) {
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
  return counter;
}

export function hiveRules(array, array2, i, j) {
  let counter = countNeighbor(array, i, j);
  //Si está muerta
  if (array[i][j] === 0) {
    if (counter === 3) {
      //revive
      array2[i][j] = 1;
    }
  } else {
    if (counter < 2) {
      //muere
      array2[i][j] = 0;
    } else if (counter > 3) {
      //mueres
      array2[i][j] = 0;
    } else {
      //sobrevives
      array2[i][j] = 1;
    }
  }
}

export function game() {
  for (let i = 0; i < hive.length; i++) {
    for (let j = 0; j < hive[i].length; j++) {
      hiveRules(hive, hive2);
    }
  }
}

game();
console.log(hive2);
