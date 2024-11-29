// function Player(nickname){
//    this.nickname = nickname
//     this.playedmatch=0

    
// };

// Player.prototype.play =  function(){
//     this.playedmatch++,
//     console.log(this.nickname,this.playedmatch)

// }
// Player.prototype.getTierlvl = function(){
//     if (this.playedmatch<4){
//         return "A tier"
//     }
//     else if (3<this.playedmatch && this.playedmatch<7){
//         return "B tier"
//     }
//     else {
//         return "C tiert"
//     }
        

// }


class Player{
    constructor(nickname){
        this.nickname
        this.playedmatch = 0
    }
    play(){
        this.playedmatch++,
    console.log(this.nickname,this.playedmatch)
    }
    getTierlvl(){
    
    
    if (this.playedmatch<4){
        return "A tier"
    }
    else if (3<this.playedmatch && this.playedmatch<7){
        return "B tier"
    }
    else {
        return "C tiert"
    }
}
    }

const gomszab = new Player("gomszab")
gomszab.play()
gomszab.play()
gomszab.play()
gomszab.play()
console.log(gomszab.getTierlvl())
console.log(gomszab)