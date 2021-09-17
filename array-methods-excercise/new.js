var fruit = ["banana", "apple", "orange", "watermelon"];
var vegetables = ["carrot", "tomato", "pepper", "lettuce"];

// 
console.log("fruit: ", fruit);
console.log("vegetables: ", vegetables);

// Remove the last item from the vegetable array.

vegetables.pop()
console.log(vegetables);

// Remove the first item from the fruit array.
fruit.shift();
console.log(fruit);

// Find the index of "orange."
var orangeIndex = fruit.indexOf('orange');
console.log(orangeIndex);

//  add the orange index to the end of the array 
fruit.push(orangeIndex)
console.log(fruit);

// // Use the length property to find the length of the vegetable array.
vegetables.push(vegetables.length);
console.log(vegetables);


// // Add that number to the end of the vegetable array.

// vegetables.push(veglength)
// console.log(vegetables)


// Put the two arrays together. Fruit first 

var food = fruit.concat(vegetables);
console.log(food)

// Remove 2 elements from your new array starting at index 4 with one method.
food.splice(4,2);
console.log(food)

// Reverse your array.
 food.reverse()
console.log(food)

// Turn the array into a string and return it.
var foodString = food.join(" ")
console.log(foodString)