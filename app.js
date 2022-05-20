let colmena = [
  [0, 1, 0, 1, 0],
  [1, 0, 0, 1, 1],
  [1, 0, 1, 0, 1],
  [0, 1, 0, 1, 0],
  [1, 0, 0, 1, 1],
];
//console.log(colmena);
let counter = 0;

for (let i = 0; i < colmena.length; i++) {
  for (let j = 0; j < colmena[i].length; j++) {
    //Si [2][2] está viva
    if (colmena[i - 1][j - 1] === 1) {
      counter++;
    }
    if (colmena[i - 1][j] === 1) {
      counter++;
    }
    if (colmena[i - 1][j + 1] === 1) {
      counter++;
    }
    if (colmena[i][j - 1] === 1) {
      counter++;
    }
    if (colmena[i][j + 1] === 1) {
      counter++;
    }
    if (colmena[i + 1][j - 1] === 1) {
      counter++;
    }
    if (colmena[i + 1][j] === 1) {
      counter++;
    }
    if (colmena[i + 1][j + 1] === 1) {
      counter++;
    }
    //Si está muerta

    if (colmena[i][j] === 0) {
      if (counter === 3) {
        //revive
      }
    } else {
      if (counter < 2) {
        //muere
      } else if (counter > 3) {
        //mueres
      } else {
        //sobrevives
      }
    }
    //console.log(colmena[i][j]);
  }
}
console.log(colmena[0][0]);
