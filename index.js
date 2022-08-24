function isPalindrome(word) {
  // Write your algorithm here
  let invertedWord = word.split('').reverse().join('')
  if (invertedWord===word){
    return true
  }
  else{
    return false
  }
}

/* 
  Add your pseudocode here
   take the input string and invert it
   store  the inverted string
   compare with the inverted string with the input string
   if they are the same{}
        return true}
     else{
      return false
     }
*/

/*
  Add written explanation of your solution here
  the isPalindrom function takes the passed string splits it into individual characters
  the characters are then reversed and join to form a word
  the reversed word is then compared with the input string
  if they are the same then it returns true
  if they are not the same it returns false

*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
