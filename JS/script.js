var debutDePhrase = "Aujourd'hui";
var dateDuJour = new Date();
var suiteDePhrase = ", sont présents :";
var nombreDeStagiaires = 10;
var finDePhrase = "stagiaires. <br>";

document.write(
  debutDePhrase +
    " " +
    dateDuJour.toLocaleDateString() +
    " " +
    suiteDePhrase +
    " " +
    nombreDeStagiaires +
    " " +
    finDePhrase
);

document.write(
  debutDePhrase +
    " " +
    dateDuJour.getDate() +
    "/" +
    (dateDuJour.getMonth() + 1) +
    "/" +
    dateDuJour.getFullYear() +
    suiteDePhrase +
    " " +
    nombreDeStagiaires +
    " " +
    finDePhrase
);
var age;
var prenom = prompt("quel est ton prenom");
console.log(prenom);
age = prompt("quel est ton age ?");
console.log(typeof age);
if (isNaN(age)) {
  alert(age + "n'est pas un chiffre");
} else {
  alert("je m'appelle" + prenom + "et j'ai " + age);
}
var p = document.querySelector("p");
p.innerHTML = `je m'appelle ${prenom} et j'ai ${age} ans`;
