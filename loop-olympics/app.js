// // Preliminaries
// Write a for loop that prints to the console 9 through 0.


// Write a for loop that prints to the console the numbers 0 through 9.


const numbers = [0,1, 2, 3, 4, 5, 6, 7, 8, 9]

    for( var i= 0; i <numbers.length; i++){
    console.log(numbers[i])
}


// loop that prints 9 to 0 

const numbersOpposite = [0,1, 2, 3, 4, 5, 6, 7, 8, 9]
    for(var i = numbersOpposite.length -1; i >0; i--)
    console.log(numbersOpposite[i])

// Write a for loop that prints these fruits to the console.
// const fruit = ["banana", "orange", "apple", "kiwi"]

const fruit = ["banana", "orange", "apple", "kiwi"]
    for (var i= 0; i < fruit.length; i++)
        console.log(fruit[i])

        // Bronze Medal
        // Write a for loop that will push every other fruit to an array.
        // const fruit = ["banana", "orange", "apple", "kiwi", "pear", "peach"]


 // Write a for loop that will push the numbers 0 through 9 to an array.

        const numbersArr = [0,1, 2, 3, 4, 5, 6, 7, 8, 9]
            for (var i= 0; i <10; i++){
                console.log(numbersArr)
            }

// Write a for loop that prints to the console only even numbers 0 through 100.

            for (var i = 0; i <= 100; i++){
                if ([i] % 2 === 0) {
                    console.log([i] + "");
                }
            }


  // Write a for loop that will push every other fruit to an array.

    const fruits = ["banana", "orange", "apple", "kiwi", "pear", "peach"]
            for(var i=0; i < fruits.length; i += 2)
            if ([i] % 2 === 0) {

        console.log(fruits[i]);
            }