var poke = document.getElementById('poke');
var cmp = document.getElementById('counter');
poke.addEventListener('click', myfonction)

function myfonction() {
  cmp.innerHTML = parseInt(cmp.innerHTML) +1;


}