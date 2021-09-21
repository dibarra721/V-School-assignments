const readlineSync = require('readline-sync');

const userName = readlineSync.question('Hi! What is your Name? ');
console.log('Hi ' + userName + '!');

readlineSync.question('Hello ' + userName + ', Weclone to Hamster Battle. Press Enter to begin.');

const enemies = ['Gerbil', 'Cat', 'Bird'];
const treasure = ['hamsterball', 'snack', 'backpack'];
var prize = [];
let playerHealth = 60;
const options = ['Walk', 'Exit', 'Print'];
let pickUp = treasure[Math.floor(Math.random() * treasure.length)];

function game() {
    const attackPower = Math.floor(Math.random() * (20 - 60));
    let enemyHealth = 30;
    const enemyPower = Math.floor(Math.random() * (6 - 4 + 2) + 3);
    const enemy = enemies[Math.floor(Math.random() * enemies.length)];

    const index = readlineSync.keyInSelect(options, + userName + 'What would you like to do next?');
    console.log(userName + ' What would you like do do next? ')

    if (options[index] == 'Exit') {
        // return userHealth = 0;
        console.log('Goodbye', + userName);
    } else if (options[index] == 'Print') {
        console.log(userName + + playerHealth + treasure + pickUp);

    } else if (options[index] === 'Walk') {
        let key = Math.random();
        if (key <= .3) {
            console.log('Walking... no sign of danger here.');
        } else if (key >= .3) {
            console.log(enemy + ' has arrived.');

            const player = readlineSync.question(`Will you run (press "r") or will you stand and fight? (press "f") `);

            switch (player) {
                case 'r':
                    const run = Math.random();
                    if (run < .5) {
                        console.log(enemy + '' + 'is faster and hits you for' + '' + enemyPower + '' + 'damage.');
                    }
                    else {
                        console.log(' You have managed to run away! Congrats');
                        break;

                    }

                case 'f':
                    enemyHealth -= attackPower;
                    console.log('You attacked ' + '' + enemy + '' + 'for' + attackPower + '' + ' damage');
                    playerHealth -= enemyPower;
                    console.log('You got attacked with ' + '' + enemyPower + '' + ' damage');
                    if (enemyHealth <= 0) {
                        console.log(' You have killed the ' + ' ' + enemy + ' and have found' + pickUp);

                        let collectionprize = Math.random();
                        if (collectionprize <= .3) {
                            prize.push(pickUp);
                        }
                    }

                    else if (playerHealth <= 0) {
                        console.log(enemy + ' Has killed ' + userName + ' Game Over ')

                    }
            }
        }


    }

}


while (playerHealth > 0) {
    playerHealing = function () {
        playerAlive = true;
        playerHealth = 20
    }
    playerHealing();
    game();
}










// })
