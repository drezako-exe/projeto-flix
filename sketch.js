let filmes = [
  "O Poderoso Chefão", "Matrix", "Clube da Luta", "Forrest Gump",
  "Star Wars", "O Resgate do Soldado Ryan", "A Origem", "Gladiador",
  "Jurassic Park", "Titanic", "Avatar", "Indiana Jones",
  "De Volta para o Futuro", "O Exterminador do Futuro", "Harry Potter",
  "Os Vingadores", "Homem de Ferro", "Batman: O Cavaleiro das Trevas", "Homem-Aranha"
];

let currentFilm = "";
let previousFilm = "";
let penultimateFilm = "";
let filmIndex = 0;
let charIndex = 0;
let frameCounter = 0;

function setup() {
  createCanvas(800, 600);
  textSize(32);
  fill(255);
}

function draw() {
  background(0);

  if (frameCounter % 10 == 0 && filmIndex < filmes.length) {
    if (charIndex < filmes[filmIndex].length) {
      currentFilm += filmes[filmIndex][charIndex];
      charIndex++;
    } else {
      penultimateFilm = previousFilm;
      previousFilm = currentFilm;
      currentFilm = "";
      charIndex = 0;
      filmIndex++;
      if (filmIndex >= filmes.length) {
        noLoop(); // Para a animação quando todos os filmes forem mostrados
      }
    }
  }

  text(penultimateFilm, 50, height / 2 - 80);
  text(previousFilm, 50, height / 2);
  text(currentFilm, 50, height / 2 + 80);
  frameCounter++;
}
