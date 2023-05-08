// tag::type_de_donnees[]
console.group("Type de données : ");
// Déclarations :
let jedi = "Obi-Wan Kenobi";
let sith = "Anakin Skywalker";
let aujourdhui = new Date();
let planetes = ["Tatooïne", "Dagobah", "Naboo", "Aldérande"];
// Vérifications des types de données :
console.log(typeof jedi);
console.log(typeof sith);
console.dir(aujourdhui);
console.table(planetes);
console.groupEnd();
// end::type_de_donnees[]

// tag::structure_de_code[]
console.group("Structures de code : ");
console.log("Les planètes avec une boucle for..of : ");
for (const planete of planetes) {
    console.dir(planete);
}
console.log("Une condition :")
if (aujourdhui.getDay() % 2) {
    sith = "Dark Vador";
}
console.dir(sith);
console.groupEnd();
// end::structure_de_code[]

// tag::fonction[]
/**
 * Permet de retrouver un principe du code jedi
 * par son index
 *
 * @param index
 * @returns {string}
 */
function code_jedi(index) {
    const principes = [
        "Il n'y a pas d'émotion, il y a la paix",
        "Il n'y a pas d'ignorance, il y a la connaissance",
        "Il n'y a pas de passion, il y a la sérénité",
        "Il n'y a pas de chaos, il y a l'harmonie",
        "Il n'y a pas la mort, il y a la Force"
    ]
    return principes[index];
}
console.log(code_jedi(1));
// end::fonction[]