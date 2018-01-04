var secretNumber = 6;
var guess = prompt("Guess the secret number");

if(Number(guess)===secretNumber){
    alert("You are right!");
}else if(Number(guess)>secretNumber){
    alert("Too high! Aim lower");
}else{
    alert("Too low! Pick yourself up!");
}
