const sum = require('./utility.js')
require('./account-service.js')

let checkingBalance = 300
let savingsBalance = 5000
let retirementBalance = 70000

retirementAccountBalance = 270000

let totalBalance=sum([checkingBalance, savingsBalance, retirementBalance] )
console.log(totalBalance)