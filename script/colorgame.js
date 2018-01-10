var h1 = document.querySelector("h1");
var colors;
var message = document.querySelector("#message");
var squares = document.querySelectorAll(".square");
var pickedColor;
var colorDisplay = document.getElementById("colorDisplay");
var resetButton = document.getElementById("reset");
var easyButton = document.getElementById("easy");
var hardButton = document.getElementById("hard");
var hardMode = true;
restart();

for( var i = 0; i<squares.length;i++){
    squares[i].addEventListener("click",function(){
        var clickedColor = this.style.backgroundColor;

        if(clickedColor === pickedColor){
            resetButton.textContent = "Play Again?";
            message.textContent="Correct!";
            changeColors(pickedColor);
            h1.style.backgroundColor= pickedColor;
        }else{
            message.textContent="Try again!";
            this.style.backgroundColor="#232323";
            
        }
    });

}

resetButton.addEventListener("click", function(){
    restart(6);
});

easyButton.addEventListener("click", function(){
    this.classList.add("selected");
    hardButton.classList.remove("selected");
    hardMode = false;
    restart();
});

hardButton.addEventListener("click", function(){
    this.classList.add("selected");
    easyButton.classList.remove("selected");
    hardMode= true;
    restart();
});

function changeColors(color){
    for(var i = 0; i < squares.length;i++){
        squares[i].style.backgroundColor = color;
    }
}

function pickColor(){
   return colors[Math.floor(Math.random()*colors.length)];
   
}

function generateRandomColors(numberOfcolors){
    var colors = [];
    for(var i = 0; i < numberOfcolors; i++){
        colors[i] = createColor();
    }
    return colors;
}

function createColor(){
    var rgb = [];
    for(var i = 0; i<=2;i++){
        rgb[i]= Math.floor(Math.random()*256);
    }
    return "rgb("+rgb[0]+", "+rgb[1]+", "+rgb[2]+")";
}



function restart(){
    if (hardMode){
        colors = generateRandomColors(6); 
        for(var i = 3 ;i<squares.length;i++){
            squares[i].style.display = "block";
        }   
    }else{
        colors = generateRandomColors(3);
        for(var i = 3 ;i<squares.length;i++){
            squares[i].style.display = "none";
        }
    }
    
    resetButton.textContent="New Colors";
    
    pickedColor = pickColor();
    colorDisplay.textContent = pickedColor;
    h1.style.backgroundColor = "steelblue";
    message.textContent =  "    ";  
    for(var i = 0; i <squares.length;i++){
        squares[i].style.backgroundColor = colors[i]
    }
}