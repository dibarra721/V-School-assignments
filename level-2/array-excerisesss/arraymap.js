// 1) Make an array of numbers that are doubles of the first array

function doubleNumbers(arr) {
    return arr.map((double) => double * 2);
}

console.log(doubleNumbers([2, 5, 100]));


// 2) Take an array of numbers and make them strings

function stringItUp(arr) {
    return arr.map((string) => string.toString());
}

console.log(stringItUp([2, 5, 100]));
// ["2", "5", "100"]


// 3) Capitalize each of an array of names


function capitalizeNames(arr){
    const lower = arr.map((lower) => lower.toLowerCase());
    return lower.map(
        (captailize) => captailize.charAt(0).toUpperCase()+ captailize.slice(1)
    );
}
    
console.log(capitalizeNames(["john", "JACOB", "jinGleHeimer", "schmidt"]));

function namesOnly(arr) {
    return arr.map((name) => name.name);


}

console.log(namesOnly([{
        name: "Angelina Jolie",
        age: 80
    },
    {
        name: "Eric Jones",
        age: 2
    },
    {
        name: "Paris Hilton",
        age: 5
    },
    {
        name: "Kayne West",
        age: 16
    },
    {
        name: "Bob Ziroll",
        age: 100
    }
]));
// ["Angelina Jolie", "Eric Jones", "Paris Hilton", "Kayne West", "Bob Ziroll"]


function makeStrings(arr) {
    const result = arr.map((age) => {
        if (age.age < 20) {
            return `${age.name} is under age !`;
        } else {
            return `${age.name} can go to the Matrix`;
        }
    });
    return result;
}


console.log(makeStrings([{
        name: "Angelina Jolie",
        age: 80
    },
    {
        name: "Eric Jones",
        age: 2
    },
    {
        name: "Paris Hilton",
        age: 5
    },
    {
        name: "Kayne West",
        age: 16
    },
    {
        name: "Bob Ziroll",
        age: 100
    }
]));
// ["Angelina Jolie can go to The Matrix",
// "Eric Jones is under age!!",
// "Paris Hilton is under age!!",
// "Kayne West is under age!!",
// "Bob Ziroll can go to The Matrix"]


function readyToPutInTheDOM(arr) {
    return arr.map(name => `<h1> ${name.name}</h1><h2>${name.age}</h2>`);

}



console.log(readyToPutInTheDOM([
    {
        name: "Angelina Jolie",
        age: 80
    },
    {
        name: "Eric Jones",
        age: 2
    },
    {
        name: "Paris Hilton",
        age: 5
    },
    {
        name: "Kayne West",
        age: 16
    },
    {
        name: "Bob Ziroll",
        age: 100
    }
]));
// ["<h1>Angelina Jolie</h1><h2>80</h2>",
// "<h1>Eric Jones</h1><h2>2</h2>",
// "<h1>Paris Hilton</h1><h2>5</h2>",
// "<h1>Kayne West</h1><h2>16</h2>",
// "<h1>Bob Ziroll</h1><h2>100</h2>"]
