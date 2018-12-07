const sum = require("./utility.js")

let checkingBalance = 300
let savingsBalance = 1000
let retirementBalance = 25000

let totalBalance = sum([checkingBalance,savingsBalance,retirementBalance])
console.log(totalBalance)