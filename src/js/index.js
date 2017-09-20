let taxCalc = require('./taxCalculator')

let originalPrice = 1000
let tax = 1.08
let price = taxCalc(originalPrice, tax)
document.getElementById('content').innerHTML = price + '円'