var a1 = [1, 2, 3, 4, 5];
var a2 = [-5, -12, 23, 62, -100, 71];
var total;

sumArray(a1);
sumArray(a2);

function sumArray(a){
    total = 0;
    for(let i = 0; i < a.length; i++){
        total += a[i];
    }
    console.log(total);
}