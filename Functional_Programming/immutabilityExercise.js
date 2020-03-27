"use strict";
//this function returns a random lottery number
function lotteryNum() {
	return (Math.round(Math.random() * 100) % 58) + 1;
}
// picks a number and an array in which to push generated numbers and returns an array of eligible lucky numbers
function pickNumber(num,nums) {
	if (!nums.includes(num)) { //checks whether the generated numbers includes a repeated value
		nums = [num,...nums]; //copys the array of numbers to make the original array immutable 
		nums.sort(function asc(a,b){ return a - b; });
		//sorts the eligible array of numbers into ascending order
	}
	return nums;
}

var luckyLotteryNumbers = [];
const howMany = 6; //defines the number of lucky numbers to generate

while (luckyLotteryNumbers.length < howMany) {
	luckyLotteryNumbers = pickNumber(
		lotteryNum(), //picks a lottery number by randomly by calling the function
		Object.freeze(luckyLotteryNumbers) //passes in an immutable version of the luckyNumbers array
	);
}

console.log(luckyLotteryNumbers); //outputs the lottery number to the console.
