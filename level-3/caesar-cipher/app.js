const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// CAESAR
function ceasarCipher(plaintext, shift){
	 if(shift < 0){
	 	return ceasarCipher(plaintext, shift + 26);
	 }
	
	// Store the ciphered text
	var ciphertext = '';

	// Loop trough each letter in plaintext
	for(var i = 0, n = plaintext.length; i < n; i++){
		
		// Get the i-th character
		var character = plaintext[i];
		
		// If it's a letter
		if(character.match(/[a-z]/i)){
		
			// Get the ascii code of each character
			var code = plaintext.charCodeAt(i);
			
			// Uppercase letters
			if((code >= 65) && (code <= 90)){
				character = String.fromCharCode(((code - 65 + shift ) % 26) + 65);
			}
			// Lowercase letters
			else if((code >= 97) && (code <= 122)){
				character = String.fromCharCode(((code - 97 + shift ) % 26) + 97);
			}
		}
		ciphertext += character;
	}
	return ciphertext;	
};

// Get user's input
rl.question('\n' + 'What would you like to encrypt ', (input) => {
	var msg = input.toLowerCase;

	rl.question('How many letters(number): ', (shift) => {
		var key = parseInt(shift);

		rl.write(" ----------\n" + '\n');	 

		console.log("Encrypted message: " + ceasarCipher(input, shift) + '\n'); 
	
		rl.close();
	});	 
});