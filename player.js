class Player {


    consrtuctor(){
this.index=0
this.name=0
}
static getPlayerCount(){
    database.ref('playerCount').on("value", (data) => {
          playerCount = data.val();
        });
        console.log(playerCount)
}

static updatePlayerCount(count){
    database.ref('/').update({
      playerCount: count,
            });
}

}
