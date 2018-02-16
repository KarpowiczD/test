const TAX_RATE = 0.08;
const PHONE_PRICE = 2999;
const ACCE_PRICE = 200;
const MAX_TRESHOLD = 200;

var acount_balance = 5000;
var amount = 0;

function calculateTax(a1) {
    return a1 * TAX_RATE;
}

function formatAmount(a2) {
    return a2.toFixed(2) + "zł";
}

while (amount < acount_balance) {
    amount = amount + PHONE_PRICE;
    if (amount < MAX_TRESHOLD) {
        amount = amount + ACCE_PRICE;
    }
}

amount = amount + calculateTax(amount);
console.log("kwota do zapłaty: " + formatAmount(amount));

if (amount > acount_balance) {
    console.log("nie możesz kupić telefonu. :(");
}