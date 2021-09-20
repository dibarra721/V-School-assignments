var people = ["Jon", "Jacob", "Jingle", "Heimer", "Schmidt"]


var alphabet = "abcdefghijklmnopqrstuvwxyz"





// var forception =people.concat(charsalaphabet)
// console.log(forception)

// for (var i= 0; i < forception.length; i++){
//     for (var j = 0; j < forception[i].length; j++){
//         console.log(forception[i][j])



//     }
// }

function forecepetion(people, alphabetArray){
    var realArray = []

    var upperCaseAlphabet =  alphabet.toUpperCase()
    alphabetArray = upperCaseAlphabet.split("");


    for (var i= 0; i <people.length; i++){  
       realArray.push(people[i])
    for (var j= 0; j < alphabetArray.length; j++){
        realArray.push(alphabetArray[j])

    }

}
console.log(realArray) 
return realArray
}

forecepetion(people,alphabet)


