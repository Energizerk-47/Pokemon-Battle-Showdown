class Form{

constructor(){
    this.playButton = createButton("PLAY")  
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
}