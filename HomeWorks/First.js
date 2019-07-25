"use strict";

let money = +prompt("Your month's budjet:", "Not your buisness");
let time = prompt("Enter date in YYYY-MM-DD's format", "YYYY-MM-DD");


let appData = {
    budjet: money,
    date: time,
    expenses: {},
    optionalExpenses: {},
    income: [],
    savings: false 
};


for(let i = 0; i < 2; i++){
    let a = prompt("Enter your expenses in this month");
    let b = prompt("How much will it cost?");
    
    if((typeof(a)) === "string" && (typeof(a)) != null && (typeof(b)) != null
        && a != "" && b != "" && a.length < 50 ){
            console.log("done");
            appData.expenses[a] = b;
        }
        else{
            i -= 1;
        }
}

appData.moneyPerDay = appData.budjet / 30;
alert("Your daily bugjet: " + appData.moneyPerDay);

if(appData.moneyPerDay <= 100) {
    console.log("A poor one");
}
else if(appData.moneyPerDay > 100 && appData.moneyPerDay <= 2000) {
    console.log("A midlle one");
}
else if (appData.moneyPerDay > 2000){
    console.log("A whealthy one");
}