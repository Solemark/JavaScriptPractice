function gachaRoll(game){
    var rollCount = 0;
    var c = 0;
    var chance = 0;
    var pity = 0;
    var rarity = "";

    if(game == "FGO"){
        chance = 100;
        pity = 300;
        rarity = "5*"
    }
    if(game == "AK"){
        chance = 50;
        pity = 100;
        rarity = "6*";
    }
    if(game == "GI"){
        chance = 167;
        pity = 90;
        rarity = "5*";
    }
    
    while(true){
        rollCount++;
        c = Math.floor((Math.random() * chance) + 1);
        if(c == 1){
            console.log("It took " + rollCount + " rolls to get a " + rarity + " in " + game);
            break;
        }
        if(rollCount == pity ){
            console.log("You hit pity at " + pity + " for your " + rarity + " on " + game);
            break;
        }
    }
}

gachaRoll("FGO");
gachaRoll("AK");
gachaRoll("GI");