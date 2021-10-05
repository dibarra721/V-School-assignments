class Player {
  constructor(name, totalCoins = 0, hasStar) {
    this.name = name;
    this.totalCoins = totalCoins;
    this.hasStar = hasStar;
    this.statusOption = "Powered Up";
  }

  setName(namePicked) {
    if (namePicked === `Mario` || namePicked === `Luigi`) {
      return (this.name = namePicked);
    }
  }

  gotHit() {
    const status = ["Powered Up", "Big", "Small", `Dead`];
    let prevIndex = status.findIndex((status) => status === this.statusOption);
    if (prevIndex < 3) {
      this.statusOption = status[prevIndex + 1];

      if (prevIndex === 0) {
        this.hasStar = false;
      }
    } else {
      this.statusOption = status[prevIndex];
    }
  }

  gotPoweredUp() {
    const status = ["Powered Up", "Big", "Small", `Dead`];

    let prevIndex = status.findIndex((status) => status === this.statusOption);
    if (prevIndex > 0) {
      this.statusOption = status[prevIndex - 1];
    } else {
      this.statusOption = status[prevIndex];
      this.hasStar = true;
    }
  }

  addCoins() {
    this.totalCoins++;
  }

  print() {
    console.log(`Name: ${this.name}`);
    console.log(`Total Coins:${this.totalCoins}`);
    console.log(`Status: ${this.statusOption}`);
    console.log(`Has Star: ${this.hasStar}`);
  }
}

const randomRange = function (player) {
  let randomNum = Math.floor(Math.random() * 3);
  switch (randomNum) {
    case 0:
      player.gotHit();
      break;
    case 1:
      player.gotPoweredUp();
      break;
    case 2:
      player.addCoins();
      break;
    default:
      break;
  }
};

let gameActive = true;

const character = new Player("Lugi", 0, true);

const startGame = setInterval(() => {
  if (gameActive) {
    randomRange(character);
    character.print();

    if (character.statusOption === `Dead`) {
      gameActive = false;
    }
  } else {
    clearInterval(startGame);
  }
}, 1000);
