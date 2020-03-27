"use strict";
// recursive funtion to check for a palindrome
function isPalindrome(str) {
	if (str.length < 2) return true; //any string which has a length less than 2 is a palindrome
	var first = str[0];
	var last = str[str.length - 1];
	if (first === last) { //checks whether the first character is the same as the last one
		return isPalindrome(str.substring(1,str.length-1)); //recursively runs a function to check for the palindrome.
	}
	return false;
}

//Test cases to check whether the function works.
console.log( isPalindrome("") === true );
console.log( isPalindrome("a") === true );
console.log( isPalindrome("aa") === true );
console.log( isPalindrome("aba") === true );
console.log( isPalindrome("abba") === true );
console.log( isPalindrome("abccba") === true );

console.log( isPalindrome("ab") === false );
console.log( isPalindrome("abc") === false );
console.log( isPalindrome("abca") === false );
console.log( isPalindrome("abcdba") === false );
