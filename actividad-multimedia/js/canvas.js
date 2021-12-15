var myCanvas = document.getElementById("canvas01");
var ctx = myCanvas.getContext("2d");

var img = new Image();
img.src = "https://img.freepik.com/vector-gratis/coleccion-hojas-tropicales_1324-119.jpg?size=338&ext=jpg";


img.onload = function(){
    ctx.drawImage(img, 0, 0);
  } 
