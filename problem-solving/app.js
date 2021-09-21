// Write a function that takes an array of numbers and returns the largest (without using Math.max())
var array = [3, 5, 2, 8, 1];
var largest = 0;

for (i = 0; i <= largest; i++) {
    if (array[i] > largest) {
        var largest = array[i];
    }
}

console.log(largest);



// Write a function that takes an array of words and a character and returns each word that has that character present.


// lettersWithStrings(["#3", "$$$", "C%4!", "Hey!"], "!") // => ["C%4!", "Hey!"]

var letterArray = (["#3", "$$$", "C%4!", "Hey!"], "!")

function characterString(array, x) {

    const firstCharacter = []
    for (i = 0; i < array.length; i++) {
        let arrayValue = array[i].split("")

    }
    for (j = 0; j < arrayValue.length; j++) {
        if (arrayValue[j] == x) {

            firstCharacter.push(arrayValue.join(""))

        }


        return firstCharacter();

    }
}
console.log(characterString(["#3", "$$$", "C%4!", "Hey!"], "!"))


// letterArray[propertyName]


// for ( var j=0 ; j < letterArray.length; j++)
//     return console.log(letterArray[j]);

// )





// for ( var i=0; i < letterString.length; i++){
//     if ([i]==="C%4!", "Hey!"){

//         console.log(letterString)
// }

//     }


// }





// Write a function that takes a num1 and num2 and returns whether num1 is divisible by num2.

var numbersArry = [""];

function isDivisible(num1, num2) {


    if (num1 % num2 === 0) {
        return console.log("True");
    }
    else if (num1 % num2 !== 0) {
        return console.log("False")

    }
    // return console.log("true")

    //     }

    //     else if (n)




}

isDivisible(4, 2);
isDivisible(9, 3);
isDivisible(15, 4);