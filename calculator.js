function screen(val){
document.getElementById("display").value+=val;
}
function e() 
{ 
try{
  var a;
  a=eval(document.getElementById("display").value);
  c(a);  
}
catch(e)
{
 c('Error');
}
}
function c(val)
{
document.getElementById("display").value=val;
}
function kill(){
var str=document.getElementById("display").value;
document.getElementById("display").value=str.substr(0,str.length-1);
}