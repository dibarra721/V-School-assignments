
var readlineSync = require('readline-sync');

var name = readlineSync.question('Hi! What is your name? ');

readlineSync.question('Hello ' + name + ', Welcome to the escape room. Your goal is to escape.  Press Enter to see options, and pick one of the following ');

let isAlive = true;
let isDoorOpen = false;
let hasKey = false;

while (isAlive == true && isDoorOpen == false) {
  const chooseAction = readlineSync.keyIn(`
Choose one of the following:
1. Put your hand in hole 
2. Find the key 
3. Open the door 

`, {limit: '$<1-3>'});

if (chooseAction == 1) {
  console.log ('Tough luck,'+ name + ' you dead');

  isAlive = false;
} else if (chooseAction == 2 && hasKey == false){
  console.log ('Great job' + name + 'you have found the key, you have escaped');

}else if (chooseAction ==2 && hasKey==true){
  console.log('Guess you forgot you had the key. You can let yourself out')

}else if (chooseAction ==3 && hasKey==false){
  console.log(' Shoot, the door is locked. You must find the key to escape. Try again.');
  
}else if (chooseAction ==3 && hasKey==true){
  console.log( 'Congrats' + name + ' you have found the key and unlcocked the door. Go enjoy the fresh air');

  isDoorOpen= true;
}

}
