var canvas;
var backgroundImage, bgImg, car1_img, car2_img, track;
var database, gameState;
var form, player, playerCount;
var allPlayers, bohrio, radio;
var cars = [];
var alimentation;
var muedas;
var trumk;
function preload() {
  backgroundImage = loadImage("./assets/inicio.jpeg");
  car1_img = loadImage("./assets/borioo.png");
  car2_img = loadImage("./assets/radi.png");
  track = loadImage("./assets/joao.jpeg");
  juli = loadImage("./assets/jubi.png")
  loading = loadImage("./assets/loadin.jpeg");
  coin = loadImage("./assets/moeda.png");
  pedra = loadImage("./assets/pedra.png");
  restart = loadImage("./assets/sanduiche.png");
  alimentationImg = loadImage("./assets/tronco.png");



}

function setup() {
  canvas = createCanvas(windowWidth, windowHeight);
  database = firebase.database();
  game = new Game();
  game.getState();
  game.start();
}

function draw() {
  background(backgroundImage);
  if (playerCount === 2) {
    game.update(1);
  }

  if (gameState === 1) {
    game.play();
  }
  text(mouseX+" , "+mouseY, mouseX,mouseY)
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
