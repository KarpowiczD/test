var moment = require('./moment.js');

var tab = [];



var i = 0;
while (i < 10) {
    i = i + 1;  // i++
    tab.push(1);
}


i = 0;
while (i < tab.length) {
    tab[i] += 2;
    i++;
}

console.log(tab);

doubleElements(tab);
doubleElements(tab);
doubleElements(tab);

console.log(tab);

function doubleElements(t) {
    var i = 0;
    while (i < t.length) {
        t[i] *= 2;
        i++;
    }
}

var tab2 = [-2, 4, 7];

function doubleElements2(t) {
    var i = 0;
    while (i < t.length) {
        if (t[i] < 0) {
            t[i] = 0;
        } else {
            t[i] *= 2;
        }
        i++;
    }
}

doubleElements2(tab2);

console.log(tab2);

var tab3 = [2.54, 4.7, 7.9];

for (i = 0; i < tab3.length; i++) {
    tab3[i] = Math.floor(tab3[i]);
    
}

console.log(tab3);

function test1 (year, month, day) {
    var now = moment();
    var b = moment([year, month, day]);
    return b.diff(now, "days"); 
}

var diffrence = test1(2018, 09, 12);

console.log(diffrence);