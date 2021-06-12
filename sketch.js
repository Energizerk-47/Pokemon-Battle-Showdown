var player1Image
var player2Image
var startImage
var gameState="start"
var game
var pokemonName
var form
var syncImg
var database
var playerCount
var secretWord
var player1,player2

function preload(){

player1Image=loadImage("images/Ash_JN.png")
player2Image=loadImage("images/Goh_PJ.png")
startImage=loadImage("images/StartImage.jpg")
pokemonName=loadImage("images/titletext.png")
syncImg=loadImage("images/syncImage.jpeg")

}





function setup() {
  createCanvas(displayWidth,displayHeight-150);
  database=firebase.database()
game=new Game()
form=new Form()

}




function draw() {
  background(255,255,255);
  if(gameState==="start"){
game.start()


  } 
   if(gameState ==="passcode"){
game.sync()

   }
  drawSprites();
}