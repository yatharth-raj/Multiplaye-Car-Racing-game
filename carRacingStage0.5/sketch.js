var canvas, backgroundImage;

var gameState = 0;
var playerCount;

var database;

var form, player, game;

var allPlayers;

var car1,car2,car3,car4;

var cars;


function preload(){
  car1Image= loadImage("images/car1.png")
  car2Image= loadImage("images/car2.png")
  car3Image= loadImage("images/car3.png")
  car4Image= loadImage("images/car4.png")

  trackImage= loadImage("images/track.jpg")

  ground= loadImage("images/ground (4).png")
}
function setup(){
  canvas = createCanvas(displayWidth,displayHeight);
  database = firebase.database();
  game = new Game();
  game.getState();
  game.start();
}


function draw(){
  if(playerCount===4){
    game.update(1);
  }
  if(gameState===1){
    clear();
    game.play();
  }
  if(gameState===2){
    game.end();
  }
}


