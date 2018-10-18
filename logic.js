var colors = [
    "rgb(255, 0, 0)",
    "rgb(255, 255, 0)",
    "rgb(255, 255, 255)",
    "rgb(255, 0, 255)",
    "rgb(0, 0, 0)",
    "rgb(0, 0, 255)"
    ];
    
var boxes = document.querySelectorAll(".box");
var pickedColor = pickColor();
var colorDisplay = document.getElementById("colorDisplay");
colorDisplay.textContent = pickedColor;
var message = document.querySelectorAll("#message");

for(var i = 0 ; i < boxes.length ; i++){
    boxes[i].style.backgroundColor = colors[i]; 
    
    boxes[i].addEventListener("click",function(){
        var clickedColor = this.style.backgroundColor;
        if( clickedColor === pickedColor){
            message[0].textContent = "Correct";
            changeColors(clickedColor);
        }else{
            this.style.backgroundColor = "#232323";
            message[0].textContent = "Try Again";
        }
    });
}

function changeColors(color){
    for (var i = 0; i < boxes.length; i++ ){
        boxes[i].style.background = color;
    }
}

function pickColor(){
    var random = Math.floor(Math.random() * colors.length);
    return colors[random];
}
