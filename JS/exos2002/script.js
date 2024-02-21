// let fruit = prompt("quel fruit aimes tu ?");

// if (fruit === "orange") {
//   document.write("j'aime les oranges");
// } else if (fruit === "banane") {
//   document.write("j'aime les bananes");
// } else if (fruit === "pomme") {
//   document.write("j'aime les pommes");
// } else {
//   document.write("je n'aime pas les fruit");
// }

let objet = {
  nom: "Alerufa",
  age: 111,
  profession: "developpeur - coach",
};

// for (let cle in objet) {
//   console.log(cle + " " + objet[cle]);
// }

let tableauTaille = new Array(5);

for (let i = 0; i < tableauTaille.length; i++) {
  console.log(i);
}

let annuaireDesStagiaires = [
  {
    nom: "T",
    Prénom: "R",
    Tel: {
      portable: "0602040503",
      fixe: "0106800102",
    },
  },
  {
    nom: "F",
    Prénom: "B",
    Tel: {
      portable: "0602030102",
      fixe: "0102030102",
    },
  },
  {
    nom: "D",
    Prénom: "A",
    Tel: {
      portable: "0690402034",
      fixe: "0142365120",
    },
  },
];

// annuaireDesStagiaires[2].Tel[0].portable = "0706030102";
// console.log(annuaireDesStagiaires[2].Tel[0].portable);
// annuaireDesStagiaires.splice(1, 1);
// console.log(annuaireDesStagiaires);
// let countA = annuaireDesStagiaires[0].length;
// console.log(countA);
// let count = 0;

// console.log(
//   annuaireDesStagiaires[0].nom +
//     " " +
//     annuaireDesStagiaires[1].nom +
//     " " +
//     annuaireDesStagiaires[2].nom
// );

// annuaireDesStagiaires[2].Tel.portable = "0706030102";
// console.log(annuaireDesStagiaires[2].Tel.portable);
// annuaireDesStagiaires.splice(1, 1);
// console.log(annuaireDesStagiaires);
// let count = 0;

// console.log(annuaireDesStagiaires[0]);
// for (cle in annuaireDesStagiaires[0]) {
//   count++;
//   sousCount = 0;
//   for (key in annuaireDesStagiaires[0][cle]) {
//     sousCount++;
//   }
// }
// console.log(sousCount);
// console.log(count);
// console.log(sousCount + count);

let body = document.querySelector("body");
body.style.backgroundColor = "green";

let button = document.querySelector("button");
let button1 = document.querySelector("#reset");
let button2 = document.querySelector("#colorTab");
console.log(button1);

button.addEventListener("click", () => {
  body.style.backgroundColor = "lightseagreen";
});

let colorTab = ["green", "lightseagreen", "pink"];
// button2.addEventListener("click", () => {
//   if (body.style.backgroundColor === colorTab[0]) {
//     body.style.backgroundColor = colorTab[1];
//   } else {
//     body.style.backgroundColor = colorTab[0];
//   }
// });
// let i = 0;
// let colorTab = ["green", "lightseagreen", "pink"];
// button2.addEventListener("click", () => {
//   if (i < colorTab.length) {
//     while (i >= 0) {
//       body.style.backgroundColor = colorTab[i];
//       i++;
//     }
//   } else {
//     while (i < tabColor.length) {
//       body.style.backgroundColor = colorTab[i];
//       i--;
//     }
//   }
// });
let i = 0;
button2.addEventListener("click", () => {
  body.style.backgroundColor = colorTab[i];
  i++;
  if (i === colorTab.length) {
    i = 0;
  }
});
let input = document.querySelector("input");

input.addEventListener("input", () => {
  body.style.backgroundColor = input.value;
});

