

var p1Add = document.querySelector("#p1btn");
var p2Add = document.querySelector("#p2btn");
var p1Display = document.getElementById("p1Score");
var p2Display = document.getElementById("p2Score");
var reset = document.getElementById("rst");
var p1 = 0;
var p2 = 0;
var gameOver = false;
var limit = 5;
p1Add.addEventListener("click",function(){
    if(!gameOver){
        p1++;
        if(p1 === limit){
            p1Display.classList.add("winner");
            gameOver = true;
        }
        p1Display.textContent = p1;
    }
});


p2Add.addEventListener("click",function(){
    if(!gameOver){
        p2++;
        if(p2 === limit){
            gameOver = true;
            p2Display.classList.add("winner");
        }
        p2Display.textContent = p2;
    }
});


reset.addEventListener("click", function(){
    gameOver = false;
    p1 = 0;
    p2 = 0;
    p2Display.textContent = p2;
    p1Display.textContent = p1;

});
