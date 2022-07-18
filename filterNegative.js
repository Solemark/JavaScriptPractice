var a1 = [-1, 2, 3, 4, -5, 6, 7, -8, 9, 10];
var a2 = [];

for(let i = 0; i < a1.length; i++){
    if(a1[i] >= 0){
        a2.push(a1[i]);
    }
}
console.log(a2);