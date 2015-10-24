var c = document.getElementById("canvas");
var ctx = c.getContext("2d");
ctx.rect(0,0,900,600);
ctx.fill();
ctx.beginPath();
ctx.moveTo(50,300);
ctx.lineTo(850,300);
ctx.strokeStyle="red";
ctx.stroke();
//function drawBall(x){
  ctx.fillStyle = "#00A308";
  ctx.beginPath();
  ctx.arc(x,300,40,0,2*Math.PI);
  ctx.stroke();
  ctx.fill();
//}
/*document.getElementById('canvas').onclick = shm();
var t =0;
function shm() {
  while(t!=0){
    var x = Math.sin(t*Math.PI/180);
    drawBall(x);
    t++;
  }
} */



