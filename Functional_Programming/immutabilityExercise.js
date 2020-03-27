//An exercise to practice value and assignment imutability in functional programming
"use strict";

function lotteryNum() {
	return (Math.round(Math.random() * 100) % 58) + 1;
}

function pickNumber() {
    return
}

var luckyLotteryNumbers = [];

while (luckyLotteryNumbers.length < 6) {
	pickNumber();
}
console.log(lotteryNum());
console.log(luckyLotteryNumbers);