var n1 = 1;
var n2 = 0;
var max = 12;

while(n1 <= max){
    outputTable(n1);
    n1++;
}

function outputTable(n1){
    n2 = 1;
    while(n2 <= max){
        console.log(n1 + " x " + n2 + " = " + (n1*n2));
        n2++;
    }
}