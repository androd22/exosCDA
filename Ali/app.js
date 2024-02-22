



import data from './users.json' assert { type: "json" };

const membres = [
{
    nom:ali
}
]


let pseudo = document.getElementById('pseudo');
let mail = document.getElementById('email');
let age = document.getElementById('age');
let mdp = document.getElementById('mdp');
let confirm = document.getElementById('confirm');
let submit = document.getElementById('submit');
let reset = document.getElementById('reset');
let form = document.querySelector('form');
let message = document.getElementById('message');
let box = document.getElementById('container');


form.addEventListener('submit', function(e) {
    e.preventDefault(); 

    if (mdp.value !== confirm.value) {
        message.innerHTML = 'Les mots de passe ne correspondent pas';
        message.style.color = 'red';
        return; 
    }


    let newUser = {
        pseudo: pseudo.value,
        email: mail.value,
        age: age.value,
        mdp: mdp.value
    };


    if(age.value < 18){
        message.innerHTML = 'Vous devez être majeur pour vous inscrire';
        submit.disabled = true;
        message.style.color = 'red';
        return;
    }





    if (data) {
        data.push(newUser);
        box.innerHTML = JSON.stringify(data);
        
    }





    
    
    message.innerHTML = 'Utilisateur ajouté';
    message.style.color = 'green';
    setTimeout(() => {
        message.innerHTML = '';
    }, 3000);
    
    form.reset();

});







