const textBox = document.getElementById("textBox");
const toFerenheight = document.getElementById("toFerenheight");
const toCelsius = document.getElementById("toCelsius");
const resoult = document.getElementById("resoult");
let temp;


function convert(){
  if(toFerenheight.checked){
    temp = Number(textBox.value);
    temp = temp * 9 / 5 + 32;
    resoult.textContent = temp.toFixed(1) + "°F";
  }
  else if(toCelsius.checked){
    temp = Number(textBox.value);
    temp = (temp -32) * (5 / 9)
    resoult.textContent = temp.toFixed(1) + "°C";
  }
  else{
    resoult.textContent = "Select a unit";
  }
}