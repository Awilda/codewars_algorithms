function spinWords(words) {
  var separateWords = words.split(" ");
  separateWords.forEach(function(word,ind, array) {
    if (word.length >= 5) {
      array[ind] = reverseWord(word);
    }
  });
  return separateWords.join(" ");
}

function reverseWord(word) {
  var reversedWord = word.split("").reverse().join("");
   return reversedWord;