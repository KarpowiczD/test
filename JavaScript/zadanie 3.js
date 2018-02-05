//zadanie 3.1
function minuntsonhouers(countofminut) {
    var onehouer = 60;
    var houers = countofminut / onehouer;
    houers = Math.floor(houers);
    var minuts = countofminut % onehouer;
    console.log("godzin jest:" + houers + " " + minuts + " minuty");
}
minuntsonhouers(500);

//zadanie 3.3
function doublenumber() {
    var array = [10, 30, -4, 35];
    var newarray = array.map(function (x) {
        if (x < 0) {
            return 0;
        }
        return x * 2;
    });
    return newarray;
}
console.log(doublenumber())

//zadanie 3.4
// dodaje tablice hardcode
function addarray() {
    var firstarray = [8, -2];
    var secondarray = [3, 6];
    var concatedarray = firstarray.concat(secondarray ); 
    return concatedarray;
}

// dodaje każdą tablice bez hardcode //
console.log(addarray());

function addarray(firstarray, secondarray) {
    var concatedarray = firstarray.concat(secondarray);
    return concatedarray;
}
console.log(addarray([1, 2], [4, 5]));

// zadanie 3.5

function wordsout(){
    var array = [20, 40, "liczby", 7, "słowa", "out", 10];
    var newarray = array.typeoff
}
