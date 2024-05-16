const palindromes = function (word) {
  // Normalize the string by removing non-alphanumeric characters and converting to lowercase
  let cleanedStr = word.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
    
  // Split the cleaned string into an array
  let arr = cleanedStr.split('');
  
  // Create a reversed copy of the array
  let reversedArr = [...arr].reverse();
  
  // Join both arrays into strings and compare them
  return arr.join('') === reversedArr.join('');
};

// Do not edit below this line
module.exports = palindromes;
