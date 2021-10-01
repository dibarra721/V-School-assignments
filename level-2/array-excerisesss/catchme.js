function sum(x, y) {
    try {
        if (typeof x !== `number`) {
            throw `x is not a number`;
        } else if (typeof y !== `number`) {
            throw `y is not a number`;
        }
        console.log(`both x and y are numbers`)


    } catch (err) {
        console.log(err);

    }

    console.log(x + y);

}

//   1b) Call the sum function inside a try block using "1" and "2" as arguments. Use console.log within a catch block to inform the user of the error.
try {
    sum(1, 2);
} catch (err) {
    console.log("I am an error");
}

// // 2a) Given a user object, write a function called login that 
// takes a username and password as parameters. Throw an error if either of them don't 
// match. Otherwise, log to the console a message saying "login successful!"

var user = { username: "sam", password: "123abc" };

function login(username, password) {
    try {
        if (username !== user.username) {
            throw ` username does not math`;
        } else if (password !== user.password) {
            throw `password does not match`;
        }
        console.log(`login has been a sucess`)

    } catch (err) {
        console.log(err);
    }
}

// // 2b) Call the login function within a try block. In one instance use the correct 
// credentials, and in another use 
// incorrect ones. Make sure you see the appropriate message!

try {

    login("bob", "123aBc");
} catch (err) {
    console.log("I am an error");
}