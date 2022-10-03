// console.log('Hola Rolling');

// 1- Inicializar todo lo que necesite en un primer punto de la aplicacion
let player = `X`;
let board = [];

// 2- Seleccionar los elementos HTML que necesite
const squares = document.querySelectorAll(".squares");

const hover = (colorin, colorout) => {
  squares.forEach((square) => {
    square.addEventListener(
      "mouseover",
      () => (square.style.backgroundColor = colorin)
    );
  });

  squares.forEach((square) => {
    square.addEventListener(
      "mouseout",
      () => (square.style.backgroundColor = colorout)
    );
  });
};

const hoverGanador = (a, b, c) => {
  squares[a].style.backgroundColor = "#00b906";
  squares[b].style.backgroundColor = "#00b906";
  squares[c].style.backgroundColor = "#00b906";

  squares[a].addEventListener(
    "mouseover",

    () => (squares[a].style.backgroundColor = "#00b906")
  );

  squares[b].addEventListener(
    "mouseover",

    () => (squares[b].style.backgroundColor = "#00b906")
  );

  squares[c].addEventListener(
    "mouseover",

    () => (squares[c].style.backgroundColor = "#00b906")
  );

  squares[a].addEventListener(
    "mouseout",

    () => (squares[a].style.backgroundColor = "#00b906")
  );

  squares[b].addEventListener(
    "mouseout",

    () => (squares[b].style.backgroundColor = "#00b906")
  );

  squares[c].addEventListener(
    "mouseout",

    () => (squares[c].style.backgroundColor = "#00b906")
  );
};

hover("#00b906", "");

const resetButton = document.getElementById("resetButton");
const ganador = document.getElementById("result");

resetButton.addEventListener("click", () => reset());

{
}

squares.forEach((square, i) =>
  square.addEventListener("click", () => play(square, i))
);

const play = (s, i) => {
  // Chequeo que el square este vacio, sino, no hace nada
  if (s.innerHTML === "" && ganador.innerText === "") {
    // Ahora que ya chequee que esta vacio, cambio el contenido por el que tenga asignado player
    s.innerHTML = player;

    // Guardo la jugada en el array board aprovechando el i
    board[i] = player;

    const WINNINGCOMBOS = [
      [board[0], board[1], board[2]],
      [board[3], board[4], board[5]],
      [board[6], board[7], board[8]],
      [board[0], board[3], board[6]],
      [board[1], board[4], board[7]],
      [board[2], board[5], board[8]],
      [board[0], board[4], board[8]],
      [board[2], board[4], board[6]],
    ];

    for (let i = 0; i < WINNINGCOMBOS.length; i++) {
      if (
        WINNINGCOMBOS[i][0] === WINNINGCOMBOS[i][1] &&
        WINNINGCOMBOS[i][1] === WINNINGCOMBOS[i][2] &&
        WINNINGCOMBOS[i][0]
      ) {
        if (i === 0) {
          numero1 = 0;
          numero2 = 1;
          numero3 = 2;
        }
        if (i === 1) {
          numero1 = 3;
          numero2 = 4;
          numero3 = 5;
        }
        if (i === 2) {
          numero1 = 6;
          numero2 = 7;
          numero3 = 8;
        }
        if (i === 3) {
          numero1 = 0;
          numero2 = 3;
          numero3 = 6;
        }
        if (i === 4) {
          numero1 = 1;
          numero2 = 4;
          numero3 = 7;
        }
        if (i === 5) {
          numero1 = 2;
          numero2 = 5;
          numero3 = 8;
        }
        if (i === 6) {
          numero1 = 0;
          numero2 = 4;
          numero3 = 8;
        }
        if (i === 7) {
          numero1 = 2;
          numero2 = 4;
          numero3 = 6;
        }

        gana();

        hover("", "");

        hoverGanador(numero1, numero2, numero3);
      }
    }

    let vacio = 0;

    squares.forEach((square) => {
      if (square.innerHTML === "") {
        vacio++;
      }
    });

    if (vacio === 0 && ganador.innerText === "") {
      ganador.innerText = "Es un empate";
    }

    // Intercambio el jugador, si era x, lo cambio por o, y sino, lo cambio por x
    if (player === `X`) {
      player = `O`;
    } else {
      player = `X`;
    }
  }
};

const reset = () => {
  squares.forEach(
    (square) => (
      (square.innerHTML = ""), (square.style.backgroundColor = "#b9e937")
    )
  );
  player = "X";
  board = [];
  ganador.innerText = "";
  hover("#00b906", "");
  vacio = 0;
};

const gana = () => {
  if (player === "X") {
    ganador.innerText = "Gana el jugador 1";
  } else {
    ganador.innerText = "Gana el jugador 2";
  }
};
