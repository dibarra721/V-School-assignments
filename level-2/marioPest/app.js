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




form.addEventListener('submit', function(event) {
    event.preventDefault();
    let numOfGoomba = form.numOfGoomba.value
    const goombaPrice = Number(numOfGoomba) * 5
    let numofBomb = form.numOfBomb.value
    const bombPrice = Number(numofBomb) * 7
    let numOfCheep = form.numOfCheep.value
    const cheapPrice = Number(numOfCheep) * 11


    const combinedTotal = goombaPrice + bombPrice + cheapPrice
    const li = document.getElementById("allResult")
    li.textContent = " ";

    li.append(combinedTotal)





})










// Goomba Baddie Pricing

// const goombaResult = form.querySelector('#goombaBaddie').querySelector('#goombaButton')
// console.log(goombaResult)

// goombaResult.addEventListener('click', function(event) {
//     event.preventDefault();
//     let numofGoomba = form.numOfGoomba.value
//         // let priceofGoomba = form.priceOfGoomba.value
//     const goombaPrice = form.numOfGoomba * 5
//     let li = document.getElementById("goombaResult");
//     console.log(li)
//     li.textContent = " ";
//     console.log(goombaPrice);
//     li.append(goombaPrice)
// })








// // bombb pricing

// const bombResult = form.querySelector('#bombBaddie').querySelector('#bombButton')
// console.log(bombResult)

// bombResult.addEventListener('click', function(event) {
//     event.preventDefault();
//     let numofBomb = form.numOfBomb.value
//         // let priceOfBomb = form.priceOfBomb.value
//     const bombPrice = Number(numofBomb) * 7
//     let li = document.getElementById("bombResult");
//     console.log(li)
//     li.textContent = " ";
//     console.log(bombPrice);
//     li.append(bombPrice)
// })

// // Cheep Cheep Pricing
// const cheapResult = form.querySelector('#cheepBaddie').querySelector('#cheepButton')
// console.log(cheapResult)

// cheapResult.addEventListener('click', function(event) {
//         event.preventDefault();
//         const numOfCheep = form.numOfCheep.value
//             // let priceOfCheep = form.priceOfCheep.value
//         const cheapPrice = Number(numOfCheep) * 11
//         const li = document.getElementById("cheepResult");
//         console.log(li)
//         li.textContent = " ";
//         console.log(cheapPrice);
//         li.append(cheapPrice)
//     })
//     // Total Price for all the baddies



// form.addEventListener('submit', function(event) {
//         event.preventDefault();
//         const cheapPrice = Number(numOfCheep) * 11
//         const bombPrice = Number(numofBomb) * 7
//         const goombaPrice = Number(numofGoomba) * 5


//         const combinedTotal = cheapPrice + bombPrice + goombaPrice

//         const li = document.getElementById("allResult")
//         li.textContent = " ";
//         li.append(combinedTotal)

//     }


// )

form.addEventListener('submit', function(event) {
    event.preventDefault();
    let numOfGoomba = form.numOfGoomba.value
    const goombaPrice = Number(numOfGoomba) * 5
    let numofBomb = form.numOfBomb.value
    const bombPrice = Number(numofBomb) * 7
    let numOfCheep = form.numOfCheep.value
    const cheapPrice = Number(numOfCheep) * 11


    const combinedTotal = goombaPrice + bombPrice + cheapPrice
    const li = document.getElementById("allResult")
    li.textContent = " ";

    li.append(combinedTotal)





})
















// const totalPrice = cheapPrice + bombPrice + goombaPrice
// console.log(totalPrice);


// const allTotal = form.querySelector('#allbaddiettotal')


// allTotal.addEventListener('click', function(event) {
//         event.preventDefault();
//         let li = document.getElementById("allResult");
//         console.log(li)
//         li.textContent = " ";
//         console.log(totalPrice);
//         li.append(totalPrice)
//     }







// function toalCost(event) {
//     allbaddietotal.addEventListener('click', function(event) {
//             event.preventDefault();


//             let li = document.getElementById("allResult");
//             let baddiethree = cheapPrice + bombPrice + goombaPrice
//             console.log(baddiethree);
//             li.append(baddiethree);
//             toalCost();
//         }

//     )