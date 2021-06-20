class Game {

    constructor(){



    }
    start(){
        image(startImage,0,0,displayWidth,displayHeight-150)
        textSize(30)
        //text("POKEMON BATTLE SHOWDOWN",displayWidth/2,50)
        image(pokemonName,displayWidth/2-500,375,1000,200)
form.start()
    }
    sync(){
        image(syncImg,0,0,displayWidth,displayHeight-150)
        Player.getPlayerCount()
        form.sync()

    }
    select(){
        image(selectImage,0,0,displayWidth,displayHeight-150)
form.hide()
form.select()
    }
    play(){}
    end(){}

    getSecretWord(){
        database.ref('secretWord').on("value", (data) => {
            secretWord = data.val();
          });
    }

    updateSecretWord(word){
        database.ref('/').update({
            secretWord: word,
          });
    }


    updateState(state){ 
        database.ref('/').update({ gameState: state, });
     } 
    getState(){
        
        database.ref('gameState').on("value",
         (data) => { gameState = data.val(); }); 
        }
    static createSecretWord(){
        var pass = '';
        var str = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ' + 
                'abcdefghijklmnopqrstuvwxyz0123456789@#$';
          
        for (var i = 1; i <= 4; i++) {
            var char = Math.floor(Math.random()
                        * str.length + 1);
              
            pass += str.charAt(char)
        }
          
        return pass;
    
}


}