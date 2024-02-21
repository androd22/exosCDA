let palindrome = prompt("ecrivez un palindrome");
function isPalindrom(palindrome) {
  let splitPal = palindrome.split("");
  let reversePal = splitPal.reverse();
  console.log(reversePal);
}

isPalindrom(palindrome);


let annuaireDesStagiaires = [
  {
    "stagiaire1" : {
      "nom" : "T",
      "Prénom" : "R",
      "Tel" : [ "portable", "fixe"]
    },
    "stagiaire2" : {
      "nom" : "D",
      "Prénom" : "A",
      "Tel" : ["portable", "fixe"]
    }, 
    "stagiaire3" :{
      "nom" : "B",
      "Prénom" : "F",
      "Tel" : ["portable", "fixe"]
    }
  }
];

console.log(annuaireDesStagiaires.stagiaire1.tel[0])
   