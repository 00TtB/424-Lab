function function_hide() {
  if(x == 1 ) {
    showde.classList.add('hidden');
    hidede.classList.remove('hidden');
    text.classList.remove('hidden');
    x = 0;
  }
  else if(x == 0){
    showde.classList.remove('hidden');
    hidede.classList.add('hidden');
    text.classList.add('hidden');
    x = 1;
  }
}

let x = 1;
const sh = document.querySelector('.showhide');
sh.addEventListener('click', function_hide);
const showde = document.querySelector('#show');
const hidede = document.querySelector('#hide');
const text = document.querySelector('#details')