/* Toggle between adding and removing the "responsive" class to topnav when the user clicks on the icon */
function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
        x.className += " responsive";
    } else {
        x.className = "topnav";
    }
}

const form = document.marioPest

// Goomba Baddie Pricing

const goombaResult = form.querySelector('#goombaBaddie').querySelector('#goombaButton')
console.log(goombaResult)

goombaResult.addEventListener('click', function(event) {
    event.preventDefault();
    let numofGoomba = form.numOfGoomba.value
        // let priceofGoomba = form.priceOfGoomba.value
    let goombaPrice = Number(numofGoomba) * 5
    let li = document.getElementById("goombaResult");
    console.log(li)
    li.textContent = " ";
    console.log(goombaPrice);
    li.append(goombaPrice)
})

// bombb pricing

const bombResult = form.querySelector('#bombBaddie').querySelector('#bombButton')
console.log(bombResult)

bombResult.addEventListener('click', function(event) {
    event.preventDefault();
    let numofBomb = form.numOfBomb.value
        // let priceOfBomb = form.priceOfBomb.value
    let bombPrice = Number(numofBomb) * 7
    let li = document.getElementById("bombResult");
    console.log(li)
    li.textContent = " ";
    console.log(bombPrice);
    li.append(bombPrice)
})

// Cheep Cheep Pricing
const cheapResult = form.querySelector('#cheepBaddie').querySelector('#cheepButton')
console.log(cheapResult)

cheapResult.addEventListener('click', function(event) {
        event.preventDefault();
        let numOfCheep = form.numOfCheep.value
            // let priceOfCheep = form.priceOfCheep.value
        let cheapPrice = Number(numOfCheep) * 11
        let li = document.getElementById("cheepResult");
        console.log(li)
        li.textContent = " ";
        console.log(cheapPrice);
        li.append(cheapPrice)
    })
    // Total Price for all the baddies