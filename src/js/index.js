let taxCalculator = require('./tax-calculator')

let originalPrice = 1000
let tax = 1.08
let price = taxCalculator(originalPrice, tax)
document.getElementById('content').innerHTML = price + '円'
