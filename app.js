let colmena = [
  [0, 1, 0, 1, 0],
  [1, 0, 0, 1, 1],
  [1, 0, 1, 0, 1],
  [0, 1, 0, 1, 0],
  [1, 0, 0, 1, 1],
];
console.log(colmena);

let colmena2 = [
  [0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0],
];
//cambiar posición 1 y -1 porque estoy probando sólo con los que no tienen borde
for (let i = 1; i < colmena.length - 1; i++) {
  for (let j = 1; j < colmena[i].length - 1; j++) {
    let counter = 0;
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
        colmena2[i][j] = 1;
      }
    } else {
      if (counter < 2) {
        //muere
        colmena2[i][j] = 0;
      } else if (counter > 3) {
        //mueres
        colmena2[i][j] = 0;
      } else {
        //sobrevives
        colmena2[i][j] = 1;
      }
    }
    //console.log(colmena[i][j]);
  }
}
console.log(colmena2);
