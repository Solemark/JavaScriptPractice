var a1 = [5, 2, 1, 3, 6, 4, 9, 10, 8, 7];
var a2 = [];

a2.push(a1.sort(function(a, b){
    return a - b
}));

console.log(a2);