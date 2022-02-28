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

    li.append(combinedTotal + 'coins')

})



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
