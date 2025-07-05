// var n;
// console.log(n); // undefined
// n = 5;
// console.log(n); // 5
// // The variable 'n' is declared but not initialized, so it is undefined initially.
var n = 2;
function squere(num) {
    var ans = num * num;
    return ans;
}

var squere2 = squere(n);
var squere4 = squere(4);
console.log(squere2); // 4
console.log(squere4); // 16
