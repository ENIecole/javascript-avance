let form_nom = document.getElementById('form_nom');
let form_metier = document.getElementById('form_metier');
let form_description = document.getElementById('form_description');
let carte_titre = document.getElementById('carte_nom');
let carte_metier = document.getElementById('carte_metier');
let carte_description = document.getElementById('carte_description');

form_nom.addEventListener('input', () => carte_titre.innerText = form_nom.value);
form_metier.addEventListener('input', () => carte_metier.innerText = form_metier.value);
form_description.addEventListener('input', () => carte_description.innerText = form_description.value);