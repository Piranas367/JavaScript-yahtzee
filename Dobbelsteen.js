const dicethrow = [1,2,3,4,5];
let canThrow = [true,true,true,true,true];

function diceRoll(dice){
    if(dice < 0 || dice > 4){
        return;
    }
    if(canThrow[dice]){
        dicethrow[dice]= Math.floor(Math.random()*6)+1;
    }}

class Dice{
    constructor(){
        this.dicethrow = 1;
        this.canThrow = true; 
    }
}

class ScoreSheet{
    constructor(){
        this.
    }
}

