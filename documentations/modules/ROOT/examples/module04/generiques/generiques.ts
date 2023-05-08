// tag::tableaux[]
let tableauType: number[] = [1, 2, 3];
//tableauType.push("valeur incompatible");NE COMPILE PAS
tableauType.push(4);
console.log(tableauType);

//Utilisation d'un tableau générique en TypeScript
let tableauGenerique: Array<number> = [9, 8, 7];
tableauGenerique.push(6);
console.log(tableauGenerique);
// end::tableaux[]

// tag::classe_generique[]
//Déclarer une classe Générique
class Viande {
    constructor(public type: string) {
    }
}

class Legume {
    constructor(public type: string) {
    }
}

class Poulet extends Viande {
}

class Boeuf extends Viande {
}

class Tomate extends Legume {
}

class Salade extends Legume {
}

class Sandwich<V extends Viande, L extends Legume> {
    constructor(public viande: V, public legume: L) {
    }

    public afficher(): void {
        console.log("Sandwich " + this.viande.type + "/" + this.legume.type);
    }
}

// end::classe_generique[]

// tag::utilisation[]
let sandwichPouletTomate: Sandwich<Poulet, Tomate> =
    new Sandwich<Poulet, Tomate>(
        new Poulet("Poulet de Bresse"),
        new Tomate("Tomate noire de Crimée")
    );
sandwichPouletTomate.afficher();
// end::utilisation[]
