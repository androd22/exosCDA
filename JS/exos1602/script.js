let email = "test@gmail.com";
let mdp = "1234";
let submit = document.querySelector(".submit");
let askEmail = prompt("saisir l'email");
let askMdp = prompt("saisir le mot de passe");

if (askEmail === email) {
  if (askMdp === mdp) {
    alert("vous etes connecte");
  } else {
    console.log(typeof askMdp);
    alert("ce n'est pas le bon mot de passe");
  }
} else {
  alert("ce n'est pas le bon email");
}
