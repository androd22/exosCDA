let pizza = prompt("voulez-vous commander une pizza (répondre par oui ou non)");
let boisson = prompt("voulez-vous commander une boisson (répondre par oui ou non)");
let dessert = prompt("voulez-vous commander un dessert (répondre par oui ou non)");

if (pizza == "oui" && boisson == "oui" && dessert == "oui") {
  alert("vous avez pris un menu");
} else if (
  (pizza == "oui" && boisson == "oui" && dessert == "non") ||
  (pizza == "oui" && boisson == "non" && dessert == "oui") ||
  (pizza == "non" && boisson == "oui" && dessert == "oui")
) {
  alert("vous avez pris un menu partiel");
} else {
  alert("vous n'avez pas pris de menu");
}
