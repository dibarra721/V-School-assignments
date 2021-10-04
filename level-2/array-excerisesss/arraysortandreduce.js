function leastToGreatest(arr) {
    return arr.sort((a, b) => a - b)

}

console.log(leastToGreatest([1, 3, 5, 2, 90, 20])); // [1, 2, 3, 5, 20, 90]

function greatestToLeast(arr) {
    return arr.sort((a, b) => b - a)

}

console.log(greatestToLeast([1, 3, 5, 2, 90, 20])); // [90, 20, 5, 3, 2, 1]

function lengthSort(arr) {
    return arr.sort((a, b) => a.length - b.length)
}

console.log(lengthSort(["dog", "wolf", "by", "family", "eaten"])); // ["by", "dog", "wolf", "eaten", "family"]

function alphabetical(arr) {
    return arr.sort();
}

console.log(alphabetical(["dog", "wolf", "by", "family", "eaten"])); // ["by", "dog", "eaten", "family", "wolf"]

function byAge(arr) {
    return arr.sort((a, b) => a.age - b.age)
}

console.log(byAge([
    { name: "Quiet Samurai", age: 22 },
    { name: "Arrogant Ambassador", age: 100 },
    { name: "Misunderstood Observer", age: 2 },
    { name: "Unlucky Swami", age: 77 }
]));
// => [ { name: 'Misunderstood Observer', age: 2 },
//  { name: 'Quiet Samurai', age: 22 },
//  { name: 'Unlucky Swami', age: 77 },
//  { name: 'Arrogant Ambassador', age: 100 } ]


function total(arr) {
    const result =  arr.reduce((final, num) => {
        final += num;
        return final ;
        
     })
     return result 
    
    }


console.log(total([1,2,3])); // 6

 function stringConcat(arr) {
const string= arr.reduce((finalString, num) =>{
    finalString += num.toString();
    return finalString;
})
return string;

 }

console.log(stringConcat([1, 2, 3])); // "123"


function totalVotes(arr) {
    const voterResult= arr.reduce((whoVoted, currentVote) => {
    if(currentVote.voted ){
    whoVoted ++
    
    }
    return whoVoted;
    },0)
    return voterResult;
    
    }

var voters = [
    { name: 'Bob', age: 30, voted: true },
    { name: 'Jake', age: 32, voted: true },
    { name: 'Kate', age: 25, voted: false },
    { name: 'Sam', age: 20, voted: false },
    { name: 'Phil', age: 21, voted: true },
    { name: 'Ed', age: 55, voted: true },
    { name: 'Tami', age: 54, voted: true },
    { name: 'Mary', age: 31, voted: false },
    { name: 'Becky', age: 43, voted: false },
    { name: 'Joey', age: 41, voted: true },
    { name: 'Jeff', age: 30, voted: true },
    { name: 'Zack', age: 19, voted: false }
];
console.log(totalVotes(voters)); // 7


function shoppingSpree(arr) {
    const priceResult=arr.reduce((totalPrice, price) => {
        totalPrice += price.price
        return totalPrice;
    },0 )
    return priceResult;
    }

var wishlist = [
    { title: "Tesla Model S", price: 90000 },
    { title: "4 carat diamond ring", price: 45000 },
    { title: "Fancy hacky Sack", price: 5 },
    { title: "Gold fidgit spinner", price: 2000 },
    { title: "A second Tesla Model S", price: 90000 }
];

console.log(shoppingSpree(wishlist)); // 227005




function flatten(arr) {
    const flatten= arr.reduce((a, b, c) =>{
    return a.concat(b,c)
    }, [])
    return flatten;
    }
     

var arrays = [
    ["1", "2", "3"],
    [true],
    [4, 5, 6]
];


console.log(flatten(arrays));


var voters = [
    { name: 'Bob', age: 30, voted: true },
    { name: 'Jake', age: 32, voted: true },
    { name: 'Kate', age: 25, voted: false },
    { name: 'Sam', age: 20, voted: false },
    { name: 'Phil', age: 21, voted: true },
    { name: 'Ed', age: 55, voted: true },
    { name: 'Tami', age: 54, voted: true },
    { name: 'Mary', age: 31, voted: false },
    { name: 'Becky', age: 43, voted: false },
    { name: 'Joey', age: 41, voted: true },
    { name: 'Jeff', age: 30, voted: true },
    { name: 'Zack', age: 19, voted: false }
];

function voterResults(arr) {
    const restulTwo= arr.reduce((finalvotes, voters) => {
        if (voters.age < 26){
            finalvotes.youth++;
            if(voters.voted){
                finalvotes.youngVotes ++;
            }
        } else if(voters.age >35 ){
            finalvotes.old++;
            if(voters.voted){
                finalvotes.oldVotes++
            }
        } else { 
            finalvotes.mids ++;
            if(voters.voted){
                finalvotes.midVotes++;
            }
    
    } return finalvotes;
    
    }, {youngVotes:0, youth:0, midVotes:0, mids: 0, oldVotes: 0, old: 0 }
    );
    return restulTwo;
    }

console.log(voterResults(voters)); // Returned value shown below:
/*
{ numYoungVotes: 1,
  numYoungPeople: 4,
  numMidVotesPeople: 3,
  numMidsPeople: 4,
  numOldVotesPeople: 3,
  numOldsPeople: 4
}
*/