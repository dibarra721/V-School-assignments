
const names = ['Mario', 'Lugi']

const nameChoice= Math.floor(Math.random() * names.length)


class Player{
    constructor(name, totalCoins, statusOption, hasStar){
    this.name = name
    this.totalCoins= 0;
    this.statusOption= ["Powered Up", "Big,Small", "Dead"];
    this.hasStar= false;
    this.gameActive= true;

}
setName(namePicked){
    this.name= namePicked;
}


gotHit(){
    if(this.hasStar === true){
    console.log("You have a star")
}else if(this.hasStar === false){
    if(this.statusOption ==="Powered Up"){
        this.statusOption ="Big"
    }else if(this.statusOption ==="Big"){
        this.statusOption = "Small"
    }else if(this.statusOption ==="Small"){
        this.statusOption= "Dead"
        this.gameActive= false
    }
}

}

gotPoweredUp(){
    if(this.statusOption ==="Powered Up" && this.hasStar===true){
        console.log('You have Star Power')
        this.hasStar = true
    }else if(this.statusOption === "Big"){
        this.statusOption="Powered Up"
    }else if( this.statusOption==="Small")
    this.statusOption= "Big"
}

addCoins(){
    this.totalCoins ++
}

print(){

    console.log(`Name: ${this.name}
                Total Coins:${this.totalCoins}
                Status: ${this.statusOption}
                Has Star: ${this.hasStar}`)
}


}



function randomRange(min, max)  {
    return  Math.random()  * (3 - 0) + 0;

}
function gameRun(){
   const number = randomRange()

    if (this.gameActive === true) {
        players.print()
        if (number === 0) {
            players.gotHit
        } else if (number === 1) {
            players.gotPowerUp()
        } else if (number === 2) {
            players.addCoins()
        }
}else {
    clearInterval(intervalId)
    console.log("The Game is Over")
  players.print()

    }
}



const players = new Player((nameChoice, names[nameChoice]))

let intervalId

intervalId = setInterval(gameRun, 100)
