class Form{

constructor(){
    this.playButton = createButton("PLAY")
    this.inputName=createInput("name") 
    this.submit1=createButton("submit")
    this.secretWord=createElement("h3")
    this.secretInput=createInput("")
    this.submit2=createButton("submit")
    this.msg=createElement("h2")
    this.resetButton=createButton("reset")
    this.poke1=createButton("")
    this.poke2=createButton("")
    this.poke3=createButton("")
    this.poke4=createButton("")
    this.poke5=createButton("")
    this.poke6=createButton("")
}
start(){

 this.resetButton.position(50,50)
 this.resetButton.mousePressed(()=>{
    Player.updatePlayerCount(0)
    game.updateSecretWord("")
    game.updateState("")
 })
this.playButton.position(displayWidth/2,50)
this.playButton.size(100,50)
this.playButton.mousePressed(()=>{
    this.playButton.hide()
    gameState = "passcode"
})

}
select(){
this.msg.position(displayWidth/2-150,50)
this.msg.html("SELECT YOUR POKEMON")
this.poke1.position(450,200)
this.poke1.class("selectButton")
this.poke1.size(150,200)
this.poke2.position(600,200)
this.poke2.class("selectButton")
this.poke3.position(750,200)
this.poke3.class("selectButton")
this.poke4.position(450,400)
this.poke4.class("selectButton")
this.poke5.position(600,400)
this.poke5.class("selectButton")
this.poke6.position(750,400)
this.poke6.class("selectButton")

}
hide(){
    this.playButton.hide()
    this.inputName.hide()
    this.secretWord.hide()
    this.secretInput.hide()
    this.submit1.hide(
        this.submit2.hide()
    )
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
this.secretWord.html(secretWord)
this.secretWord.position(displayWidth/2,200)
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
game.updateState(gameState)
console.log(gameState)

        }
      player2=new Player()

        game.updateSecretWord(secretWord)
    
        console.log(secretWord)
        })
}



}

}