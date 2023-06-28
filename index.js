function isPalindrome(word) {
  // Write your algorithm here
  let wordReverse = word.split("").reverse().join("");

  if (word === wordReverse){
    return true 
  } else {
    return false
  }
}

/* 
  Add your pseudocode here
*/
// get reverse of word. check if equal. if equal return true, else not
/*
  Add written explanation of your solution here
*/
// its a function with conditional logic returning true or false

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
