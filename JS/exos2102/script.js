let membres = [
  {
    pseudo: "nuil",
    email: "nuil@gmail.com",
    age: 37,
    mdp: "1234",
  },
  {
    pseudo: "guou",
    email: "guou@gmail.com",
    age: 21,
    mdp: "laVieEstCourte",
  },
  {
    pseudo: "voua",
    email: "voua@gmail.com",
    age: 60,
    mdp: "je#vis",
  },
  {
    pseudo: "traub",
    email: "traub@gmail.com",
    age: 46,
    mdp: "5678",
  },
];

let button = document.querySelector("#submit");
let pseudoVal = document.querySelector("#pseudo");
let container = document.querySelector(".container");
let ageLegal = document.querySelector("#age");
let email = document.querySelector("#email");
let mdp = document.querySelector("#mdp");
pseudoVal.addEventListener("input", (e) => {
  let recupVal = e.target.value;
  console.log(recupVal);
  for (let membre in membres) {
    if (recupVal === membres[membre].pseudo) {
      button.disabled = true;
      let pseudoError = document.createElement("div");
      container.prepend(pseudoError);
      pseudoError.classList.add("pseudoError");
      pseudoError.textContent =
        "Le Pseudo est déjà pris, choisis en un autre !";
      function displayNone() {
        let pseudo = document.querySelector("#pseudo");
        pseudoError.style.display = "none";
      }
      let bye = setTimeout(displayNone, 5000);
    } else {
      button.disabled = false;
      pseudoVal.addEventListener("change", () => {
        let bienvenue = document.querySelector("#bienvenue");
        bienvenue.innerHTML = `Bienvenue ${pseudoVal.value}`;
      });
    }
  }
});

button.addEventListener("click", (e) => {
  // e.preventDefault();
  let maj = parseInt(age.value);
  if (maj >= 18) {
    // if (pseudo !== " " && age !== " " && email !== " " && mdp !== " ") {
    //   let p = document.querySelector("#pseudo").value;
    //   let e = document.querySelector("#email").value;
    //   let m = document.querySelector("#mdp").value;
    //   let a = document.querySelector("#age").value;
    //   // membres.push(p, e, m, a);
    //   localStorage.setObjet("membres", membres);
    //   let mem = localStorage.getObjet("membres");
    //   console.log(objet);
    // }
    button.disabled = false;
  } else {
    button.disabled = true;
    let ageError = document.createElement("div");
    container.prepend(ageError);
    ageError.classList.add("pseudoError");
    ageError.textContent =
      "Vous êtes mineur, vous ne pouvez pas vous inscrire !";
    function displayNone() {
      ageError.style.display = "none";
    }
    let bye = setTimeout(displayNone, 5000);
    let time = setTimeout(disabled, 5000);
    function disabled() {
      button.disabled = false;
    }
  }
});
