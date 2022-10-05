
// selection des variables

let link = document.querySelector('.link')
let icon = document.querySelector('.in')
let cross = document.querySelector('.out')
let ul = document.querySelector('.menu')

// changement d'état

link.addEventListener('click', () => { 
icon.classList.toggle('hidden');
ul.classList.toggle('hidden');
cross.classList.toggle('hidden');
});