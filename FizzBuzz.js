const max = 20;
const fizz = 3;
const buzz = 5;
var output = "";

for(var i = 1; i <= max; i++){
    output = "";
    if(i % fizz == 0){
        output += "fizz";
    }
    if(i % buzz == 0){
        output += "buzz";
    }
    if(output == ""){
        output += i;
    }
    console.log(output);
}