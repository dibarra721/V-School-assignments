function lettersWithStrings(array, x) {
    let matches = [];
    for (let i = 0; i < array.length; i++) {
        let arrayValue = array[i].split('');
        for (let k = 0; k < arrayValue.length; k++) {
            if (arrayValue[k] == x) {
                matches.push(arrayValue.join(''));
            } 
        }
    }
    return matches;
}
console.log(lettersWithStrings(["#3", "$$$", "C%4!", "Hey!"], "!"))