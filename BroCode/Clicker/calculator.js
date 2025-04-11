const decreaseBtn = document.getElementById("decreaseBtn");
const increaseBtn = document.getElementById("increaseBtn");
const resetBtn = document.getElementById("resetBtn");
const countLaber = document.getElementById("countLaber");
let count = 0;

increaseBtn.onclick = function(){
  count++;
  countLaber.textContent = count;
}

decreaseBtn.onclick = function(){
  count--;
  countLaber.textContent = count;
}

resetBtn.onclick = function(){
  count = 0;
  countLaber.textContent = count;
}