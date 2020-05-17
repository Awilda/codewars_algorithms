function duplicateEncode(word){
	let newWord = "";
	word = word.toLowerCase().split("");
	word.some(function(letter) {
		if (word.indexOf(letter) !== word.lastIndexOf(letter)) {
			newWord += ")";
		} else {
			newWord += "(";
		}
	});
	return newWord;
}

console.log(duplicateEncode("din")); // (((
console.log(duplicateEncode("recede")); // ()()()
console.log(duplicateEncode("Success")); // )())())