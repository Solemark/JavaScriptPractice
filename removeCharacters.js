var s = "Hello! My name is Mason";
var letters = ["m", "!", " "];

function removeCharacters(s, letters){
    console.log(s);
    for(var i = 0; i < letters.length; i++){
        var regex = new RegExp(letters[i], 'gi');
        s = s.replace(regex, "");
    }
    console.log(s);
}

removeCharacters(s, letters);