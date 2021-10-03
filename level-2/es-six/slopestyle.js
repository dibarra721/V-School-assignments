// ```
// Rest Operator
function collectAnimals(...animals) {
return animals
}

console.log (collectAnimals("dog", "cat", "mouse", "jackolope", "platypus"))
// ["dog", "cat", "mouse", "jackolope", "platypus"]


function combineFruit(fruit, sweets, vegetables){
    return {fruit, sweets, vegetables};
}


// => {
//         fruit: ["apple", "pear"],
//         sweets: ["cake", "pie"],
//         vegetables: ["carrot"]
//      }
     console.log(combineFruit(["apple", "pear"], ["cake", "pie"], ["carrot"]));



// Use destructuring to use the property names as variables. Desructure the object in the parameter:

      
   const vaction = {
        location: "Burly Idaho",
        duration: "2 weeks",
      }


     function parseSentence({location, duration}) {
        return `We're going to have a good time in ${location} for ${duration}`
      }


      console.log(parseSentence(vaction));

    //   Use destructuring to make this code ES6:

    const returnFirst=(...items) => {
        const [firstItem] = items; /*change this line to be es6*/
        return firstItem
    }
    

    // Write destructuring code to assign variables that 
    // will help us return the expected string. Also, change the string to be using Template literals:

    const favoriteActivities = ["magnets", "snowboarding", "philanthropy", "janitor work", "eating"];

const returnFavorites = () => {
const  [ firstFav, secondFav, thirdFav]= favoriteActivities
return `My top three favorite activities are, ${firstFav}, ${secondFav}, and ${thirdFav}.`
}

console.log (returnFavorites(favoriteActivities));



// Use the Rest and Spread Operator to help take any number of arrays, and return one array.
// You will need to change how the arrays are passed in. You may write it assuming you will always recieve '
// three arrays if you would like to.

// function combineAnimals() {

// }

const realAnimals = ["dog", "cat", "mouse"];
const magicalAnimals = ["jackolope"];
const mysteriousAnimals = ["platypus"];

const combineAnimals = () =>{
return [...realAnimals, ...magicalAnimals, ... mysteriousAnimals]
}


console.log (combineAnimals(realAnimals, magicalAnimals, mysteriousAnimals));

// ["dog", "cat", "mouse", "jackolope", "platypus"]


// Try to make the following function more ES6xy:
// function product(a, b, c, d, e) {
//     var numbers = [a,b,c,d,e];
  
//     return numbers.reduce(function(acc, number) {
//       return acc * number;
//     }, 1)
//   }

  const product =(...numbers) => numbers.reduce((acc, number) => acc * number ,1 )

  console.log(product(1,2,3,4,5))



//   Make the following function more ES6xy. Use at least both the rest and spread operators:

const unshift= (array, ...second) => {
    return [...second, ... array];
  }


  
//   function populatePeople(names){
//     return names.map(function(name){
//         name = name.split(" ");
//         // your code
//         return {
//             firstName: firstName,
//             lastName: lastName
//         }
//     })
// }


const populatePeople = (names) => names.map(name =>{
    const [firstName, lastName] = name.split(" ");
    
    return{
        firstName,
        lastName
    }
    })

console.log (populatePeople(["Frank Peterson", "Suzy Degual", "Liza Jones"]));
[
 {firstName: "Frank", lastName: "Peterson"},
 {firstName: "Suzy", lastName: "Degual"},
 {firstName: "Liza", lastName: "Jones"},
]