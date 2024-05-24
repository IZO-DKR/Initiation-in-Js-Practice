/************************************************************************************ */
/*                                     JAVASCRIPT                                     */
/************************************************************************************ */

// Exercice 01

let firstName = "John";
let lastName = "Doe";
let langage = "Javascript";

console.log(
  `Bonjour ${firstName} ${lastName} Votre langage préféré est le ${langage}`
);

//Exercice 02
let nomUtilisateur = prompt("Entrez votre nom");
let prenomUtilisateur = prompt("Entrez votre prenom");
let metierUtilisateur = prompt("Entrez votre metier");

console.log(
  `Bonjour ${nomUtilisateur} ${nomUtilisateur}! Votre métier est ${metierUtilisateur}`
);

// Exercice 01 (Number)
let noteMetah = 12;
let noteScience = 14;
let noteInformatique = 16;

let moyenne = (12 + 14 + 16) / 3;
console.log(`La moyenne des notes est de: ${moyenne}`);

// LES STRUCTURES DE CONDITIONNELLE
// Exercice 01

let entrerUtilisateur = prompt("Entrez un nombre");
if (entrerUtilisateur) {
  console.log("c'est un nombre !");
} else {
  console.log("ce n'est pas un nombre");
}

// Exercice 02
let age = 18;
let possedePermis = true;

if (age > 18) {
  console.log("Vous êtes mineur!");
}
if ((age < 18, possedePermis == false)) {
  console.log("Vous êtes majeur, mais ne pouvez pas conduire!");
} else age > 18, (possedePermis = true);
{
  console.log("Vous êtes majeur, et vous pouvez conduire!");
}

// OPERATEUR TERNAIRE
// Exercice 01
let inputUtilisateur = prompt("entrez un nombre!");
console.log(
  `inputUtilisateur ${inputUtilisateur % 2 === 0 ? "pair" : "impair"}`
);

// Exercice 02

let agee = 18;
let possedePermiss = true;

console.log(
  agee < 18
    ? "Vous êtes mineur"
    : possedePermiss
    ? "Vous êtes majeur, et vous pouvez conduire!"
    : "Vous êtes majeur, et vous pouvez conduire!"
);

//INSTRUCTION SWITCH

/*
let couleur = "bleu";
switch (couleur) {
case "rouge":
  console.log("C'est une couleur chaude!");
  break;

case "bleu":
case "vert":
  console.log("C'est une couleur froide!"); // "C'est une couleur froide!"
  break;

 default:
  console.log("Je ne connais pas cette couleur!");
}

*/
// Exercice 01
const numeroJour = prompt("Entrez un nombre 0 et 6");

if (numeroJour >= 0 && numeroJour <= 6) {
  switch (numeroJour) {
    case 0:
      console.log("Lundi");
      break;
    case 1:
      console.log("Mardi");
    case 2:
      console.log("Mercredi");
    case 3:
      console.log("Jeudi");
    case 4:
      console.log("Vendredi");
    case 6:
      ZAQRGF;
      console.log("weekend");
      break;

    default:
      console.log("jour incorrect !");
  }
}
/*******************************************************************************************/
/*                                      LES BOUCLES                                     ********************************************************************************************/

// Exercice 01 (For)

for (compteur = 0; compteur <= 20; compteur++) {
  if (compteur % 2 === 0) {
    console.log(`Nombre pair ${compteur},`);
  }
}

