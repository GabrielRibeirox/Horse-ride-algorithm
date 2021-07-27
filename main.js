//  Passeio do Cavalo
let matriz = [];
let arrayBoolean = [];

function arrayL(letter) {
  let array = []
  for (let i = 0; i < 6; i++) {
    array.push(letter + (i + 1))
  }
  return array;
}
//array boolean
function arrayB(param) {
  let array = []
  for (let i = 0; i < 6; i++) {
    array.push(param)
  }
  return array;
}
// matriz boolean
function matrizCreate(param, array) {
  for (let i = 0; i < 6; i++) {
    array.push(arrayB(param))
  }
  return array;
}

matriz = [arrayL('a'), arrayL('b'), arrayL('c'), arrayL('d'), arrayL('e'), arrayL('f')]
let visited = matrizCreate(false, arrayBoolean);


// movimentos que o cavalo pode executar 
// a ordem que elenca o movimento influencia na saída
let dx = [2, 1, -2, 1, -2, -1, -1, 2];
let dy = [1, 2, 1, -2, -1, -2, 2, -1];


let locked = false;

// Validações
// Checar se a posição é valida
function CheckBoundaries(x, y) {
  return x >= 0 && y >= 0 && x < 6 && y < 6;
}

// Checar se a posição ja foi percorrida
function goHorse(x, y) {

  if (!locked) {
    console.log(matriz[x][y]);

    visited[x][y] = true;


    for (i = 0; i < dx.length; ++i) {
      let new_x = x + dx[i];
      let new_y = y + dy[i];
      if (CheckBoundaries(new_x, new_y)
        && !visited[new_x][new_y]) goHorse(new_x, new_y)
    }
  }
  locked = true;
}

goHorse(0, 0);
