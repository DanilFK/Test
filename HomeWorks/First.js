"use strict";

let money = prompt("Your month's budjet:", "Not your buisness");
let time = prompt("Enter date in YYYY-MM-DD's format", "YYYY-MM-DD");
let first = prompt("Enter your expenses in this month");
let second = prompt("How much will it cost?");

let appData = {
    budjet: money,
    date: time,
    expenses: {first : second},
    optionalExpenses: undefined,
    income: [],
    savings: false 
};
alert("Your budjet for one day is: " + money/30);
