var today = new Date();
var houerNow = today.getHours();
var greeting;

if (houerNow > 18) { 
    greeting = "Dzień wieczór!";
} else if (houerNow > 12 ) {
    greeting = "Dzień dobry!";
} else if (houerNow > 0 ){
    greeting = "Dzień dobry!";
} else {
    greeting = "Witamy!"
}
document.write("<h3>" + greeting + "</h3>");