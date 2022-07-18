var a1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
var a2 = [];
var c = a1.length;

for(let i = 0; i < a1.length; i++){
    c--;
    a2.push(a1[c]);
}
console.log(a1);
console.log(a2);
//console.log(a1.reverse());