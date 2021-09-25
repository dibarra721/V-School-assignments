const form = document.calculator

// addition
const addResult = form.querySelector('#add').querySelector('#additionResult')
console.log(addResult)
addResult.addEventListener('click', function (event) {
    event.preventDefault();
    let num1 = form.num1.value
    let num2 = form.num2.value
    let addition = Number(num1) + Number(num2)
    let li = document.getElementById("addResult");
    console.log(li)
    li.textContent = "";
    console.log(addition);
    li.append(addition)
})

// subraction

const subResult= form.querySelector('#sub').querySelector('#subtrationResult')
console.log(subResult)
subResult.addEventListener('click', function(event){
event.preventDefault();
let num3 = form.num3.value
let num4 = form.num4.value
let subraction= Number(num3) - Number(num4)
const subResult= document.createElement('div')
let li = document.getElementById("subResult");
console.log(li)
li.textContent = "";
console.log(subraction);

li.append(subraction)



// const h1 = document.createElement('h1')
// h1.textContent = subraction

// document.getElementsByClassName("Results").appendChild(h1)
})

// multiply

const multiResults = form.querySelector('#multiply').querySelector('#multilResult')
console.log(multiResults)
multiResults.addEventListener('click', function(event){
event.preventDefault();
let num5= form.num5.value
let num6 = form.num6.value
let multiplication= Number(num5) * Number(num6)
const multiResult= document.createElement('div')
let li =document.getElementById("multiplyResult");
console.log(li)
li.textContent =  "";
console.log(multiplication);
li.append(multiplication)

})
