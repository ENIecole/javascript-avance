// tag::joo1[]
const livre1 = {
    titre: 'Fullmetal alchemist',
    sous_titre: 'Derrière la porte de la vérité',
    annee: 2020,
    auteur: 'Mariela Gonzales',
    getDescription: function () {
        return `${this.titre} a été écrit par ${this.auteur} en ${this.annee}`;
    }
}

console.table(livre1);
console.log(livre1.titre);
console.log(livre1.getDescription());
// end::joo1[]

// tag::joo2[]
function Livre(titre, sous_titre, annee, auteur) {
    this.titre = titre;
    this.sous_titre = sous_titre;
    this.annee = annee;
    this.auteur = auteur;
    this.getDescription = function () {
        return `${this.titre} a été écrit par ${this.auteur} en ${this.annee}`;
    }
}

const livre2 = new Livre("L'art du pixel : SNES", "", 2020, "Christine Bauer");
console.table(livre2);
console.log(livre2.getDescription());
// end::joo2[]

// tag::prototype1[]
function Livre(titre, sous_titre, annee, auteur) {
    this.titre = titre;
    this.sous_titre = sous_titre;
    this.annee = annee;
    this.auteur = auteur;
}

Livre.prototype.getDescription = function () {
    return `${this.titre} à été écrit par ${this.auteur} en ${this.annee}`;
}

const livre3 = new Livre("Les visions de Dune", "Dans les creux et sillons d'Arrakis", 2020, "Vivien LeJeune");
console.table(livre3);
console.log(livre3.getDescription());
// end::prototype1[]

// tag::prototype2[]
const LivrePrototype = {
    getDescription: function () {
        return `${this.titre} a été écrit par ${this.auteur} en ${this.annee}`;
    }
}

const livre4 = Object.create(LivrePrototype);
livre4.titre = "Uncharted";
livre4.sous_titre = "Journal d'un explorateur";
livre4.annee = 2018;
livre4.auteur = "Bruno Provezza";

const livre4bis = Object.create(LivrePrototype, {
    titre: {value: "Uncharted"},
    sous_titre: {value: "Journal d'un explorateur"},
    annee: {value: 2018},
    auteur: {value: "Bruno Provezza"}
});

console.table(livre4);
console.table(livre4bis);
console.log(livre4.getDescription());
// end::prototype2[]

// tag::es6[]
class Livre {
    #titre;
    #sous_titre;
    #annee;
    #auteur;

    constructor(titre, sous_titre, annee, auteur) {
        this.#titre = titre;
        this.#sous_titre = sous_titre;
        this.#annee = annee;
        this.#auteur = auteur;
    }

    getDescription() {
        return `${this.#titre} a été écrit par ${this.#auteur} en ${this.#annee}`;
    }
}

const livre5 = new Livre("Explorer Kaamelott", "Les dessous de la table ronde", 2021, "Clément Pelissier");
console.dir(livre5);
console.log(livre5.getDescription());
// end::es6[]