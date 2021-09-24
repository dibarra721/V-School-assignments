// capilizeAndLowercase("HelLo") // => "HELLOhello"


let capital = "Hello"
let lowercase ="Hello"

console.log(capital);
console.log(lowercase);

let upperString = capital.toUpperCase();
console.log(upperString);

let lowerSring= lowercase.toLowerCase();
console.log(lowerSring);

let finalArray =upperString.concat(lowerSring);
console.log(finalArray)

//  Function

let thisStr= 'Hello'
let string ='Hello'

function lowerToUpper (){
    
    let stringUpper = thisStr.toUpperCase();
    let stringLower = string.toLowerCase();

    return console.log(stringUpper + stringLower)
}
        lowerToUpper();

// Write a function that takes a string as a parameter and 
// returns a number that is half the string's length, rounded down.

let phrase1= 'Hello'
let phrase2 = 'Hello World'

function stringtohalf () {
let firstNumber=(phrase1.length) /2;
    console.log ( 'hello ' + Math.floor(firstNumber));

let secondNumber= (phrase2.length)/2;
console.log('Hello World ' + Math.floor(secondNumber));

}
stringtohalf();


// Write a function that uses slice() and the other functions you've 
// written to return the first half of the given string.
// // // 
// returnFirstHalf("Hello") // => "He"
// returnFirstHalf("Hello World") // => "Hello"


let string1= "Hello"
let string2 ="Hello World"

function sliceWords (){

let sliceOne= string1.slice(0,2);
    
let sliceTwo= string2.slice(0,5);


 console.log("" + sliceOne);

 console.log("" + sliceTwo);

}

sliceWords();


// Write a function that takes a string as a parameter and returns that string where the first half is capitalized, and the second half is lowercase.

// Hint: If your string length is odd, use Math.floor() to round down.

// capilizeAndLowercase("Hello") // => "HEllo"
// capilizeAndLowercase("Hello World") // => "HELLO world


let helloCap = "hello"

function capToLow(){
 
// the below works on the fisrt half of HELLo

let firstHalfCap= helloCap.toUpperCase();
let siliceOneHalCap= firstHalfCap.slice(0,4);


//  the below works on the second half of HeLLo
let secondSliceLower = helloCap.toLowerCase();
let secondSliceLower2 = secondSliceLower.slice(4);

return console.log(siliceOneHalCap + secondSliceLower2);


}


capToLow();



function sliceWords2 (){
let helloLow ="Hello World"

let stringSlice1 = helloLow.slice(0,5);

return console.log(stringSlice1)




}
sliceWords2();