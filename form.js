class Form{

constructor(){
    this.playButton = createButton("PLAY")
    this.inputName=createInput("name") 
    this.submit1=createButton("submit")
    this.secretWord=createElement("h3")
    this.secretInput=createInput("Secret Word")
    this.submit2=createButton("submit")
}
start(){

 
this.playButton.position(displayWidth/2,50)
this.playButton.size(100,50)
this.playButton.mousePressed(()=>{
    this.playButton.hide()
    gameState = "passcode"
})

}
hide(){
    this.playButton.hide()
}

sync(){
if(playerCount===0){
this.inputName.position(displayWidth/2,50)
this.submit1.position(displayWidth/2,200)
this.submit1.mousePressed(()=>{
playerCount++
Player.updatePlayerCount(playerCount)
secretWord=Game.createSecretWord()
player1=new Player()
game.updateSecretWord(secretWord)
console.log(secretWord)
})

}
else if(playerCount===1)
{
    this.inputName.position(displayWidth/2,50)
    this.submit2.position(displayWidth/2,200)
    this.secretInput.position(displayWidth/2,100)
    this.submit2.mousePressed(()=>{
        playerCount++
        Player.updatePlayerCount(playerCount)
        var secret=this.secretInput.value()
        game.getSecretWord()
        if(secret===secretWord){
gameState="select"
console.log(gameState)

        }
      player2=new Player()

        game.updateSecretWord(secretWord)
        console.log(secretWord)
        })
}



}

}