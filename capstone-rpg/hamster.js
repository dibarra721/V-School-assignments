const readlineSync = require('readline-sync');
const welcome = readlineSync.question('Welcome to this exciting hamster game. Please press Enter')
console.log(welcome)
const userName = readlineSync.question('What is your name? ')
console.log('\nHi ' + userName + '! Which of your enemies will you encounter today, or maybe you will obtain some delicious snacks!\n')
let isAlive = true;
let playerInfo = {
    name: userName,
    hp: 100,
    items: []
}
function Enemy(name, hp,) {
    this.name = name
    this.hp = hp
}
function createEnemy() {
    let randomNum = Math.floor(Math.random() * 3)
    if (randomNum === 0) {
        return new Enemy("Gerbial", 50,);
    } else if (randomNum === 1) {
        return new Enemy("Cat", 50,);
    } else {
        return new Enemy("Bird", 50);
    }
}
function walk() {
    const input = readlineSync.question("Press 'w' to walk, or press 'p' to check the player inventory and HP. Or press 'q' to quit ")
    if (input == "w") {
        let chanceOfBeingAttcked = Math.floor(Math.random() * (4 - 3) + 3)
        // console.log(chanceOfBeingAttcked)
        if (chanceOfBeingAttcked === 3) {
            let newEnemy = createEnemy();
            console.log(`${newEnemy.name}! Has appeared. Will you fight or decide to run away`)
            fightEnemy(newEnemy.name, newEnemy.hp);
        } else if (chanceOfBeingAttcked === 2) {
            console.log('Put a little pep in your step, you never who is watching ')
        } else if (chanceOfBeingAttcked === 1) {
            console.log('Keep walking.... No Danger')
        }
    } else if (input === "p") {
        console.log(playerInfo)
        walk()
    } else if (input == "q") {
        playerDies()
        console.log("Thanks for playing")
    }
}
function fightEnemy(enemy, enemyHP) {
    while(playerInfo.hp >= 0 || enemyHP >= 0) { //while loop will continue as long as your/enemy health is greater than 0
        let damageInflictedOnEnemy =  Math.floor(Math.random() * (75 - 25) + 25) //damage you deal in the fight
        let damageInflictedOnPlayer =  Math.floor(Math.random() * (35 - 0) + 0) //damage you receive in the fight
        const fightRun = readlineSync.question('Would you like to fight [f], or run [r]?');
            if (fightRun === "f") { //f starts fight sequence and will continue till someone reaches 0 health
                console.log("\n" + userName + "'s Health: " + playerInfo.hp)
                playerInfo.hp -= damageInflictedOnPlayer
                console.log(enemy +"'s Health: " + enemyHP)
                enemyHP -= damageInflictedOnEnemy
                console.log("\nyou both attack!")
                console.log("\n" + userName + "'s Health remaining: " + playerInfo.hp)
                console.log(enemy +"'s Health remaining: " + enemyHP)
                    if(enemyHP <= 0) { //if enemy health reaches 0
                        const treasure = ['Hamsterball', 'Snack', 'Backpack'];
                        let pickUp = treasure[Math.floor(Math.random() * treasure.length)];
                        playerInfo.items.push(pickUp); //push random item to your playerinfo.items array //to to fix duplicate items
                        console.log(`\nEnemy is dead!`)
                        walk()
                    } else if (playerInfo.hp <= 0) { //if player dies then game over
                        console.log(`\n${enemy} has killed you!\n`)
                        isAlive = false
                    }
            } else if (fightRun === "r") {
                console.log("Don't tire yourself out by running too fast. You don't have many snacks left")
                run();
            }
    }
}
function run() {
    let damageInflictedOnPlayer =  Math.floor(Math.random() * (15 - 0) + 0) //you can change how much damage you received when you try to run
    let runChance = Math.floor(Math.random() * 100) //chance of you escaping 50/50
    console.log(runChance)
        if (runChance > 50) {//if run > 50 then you go back to walk 
            console.log("Congrats you have managed to run away")
            walk()
        } else if (runChance < 50) { //if chance < 50 you go back to run but receive damage and it logs to your playerInfo.hp
            console.log(damageInflictedOnPlayer)
            console.log('You ran once, does not mean you will not have to fight, on your way out you got '+ damageInflictedOnPlayer + " damage dealt.")
            playerInfo.hp -= damageInflictedOnPlayer
            walk()
        }
}
function playerDies() {
    isAlive = false
}
while (isAlive == true) {
    walk();
}