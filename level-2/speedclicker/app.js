var count = 0;
var btn = document.getElementById("btn");
var disp = document.getElementById("display");
let reset = document.getElementById("reset")



btn.onclick = function() {
    count++;
    disp.innerHTML = count;
    var clicks = disp.innerHTML

    console.log(clicks)

    var clickNumber = JSON.stringify(clicks)
    localStorage.setItem("numberClicks", clickNumber)


    // function saveItems() {
    //     var clickNumber = JSON.stringify(clicks)
    //     localStorage.setItem("numberClicks", clickNumber)
    //     console.log(clickNumber)
    // }
    // saveItems()




}
refresh.onclick = function() {
    const clicksClicked = JSON.parse(localStorage.getItem("numberClicks"))
    console.log(clicksClicked[0])

    disp.innerHTML = clicksClicked

}


// this will load items, by taking them out of string format and putting them back into an array
// function loadItems() {
//     const items = JSON.parse(localStorage.getItem('numberClicks'))
//     if (items) {
//         items.forEach(item => {
//             addItem(item)
//         })
//     }
// }
// loadItems()










// function reload() {
//     reload = location.reload();

//     // Event listeners for reload
//     refresh.addEventListener("click", reload, false);

//     // count = (localStorage.getItem("numberClicks"))
//     // console.log(count)
//     // localStorage.setItem("numberClicks", count += 1)
//     // let currentCount = localStorage.getItem("numberClicks")
//     // display.textContent = currentCount

//     // localStorage.removeItem("count")
//     localStorage.setItem("numberClicks", 0)
//     let zero = localStorage.getItem("numberClicks")
//     display.textContent = zero
// }