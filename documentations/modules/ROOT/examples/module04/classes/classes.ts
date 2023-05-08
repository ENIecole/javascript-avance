// tag::sport[]
export class Sport {
    public nom: string;
    private prive: string;

    constructor(nom: string, public description: string) {
        this.nom = nom;
        this.prive = "valeur cachée";
    }

    public afficher(): void {
        console.log(`${this.nom} - ${this.description}`);
    }
}

// end::sport[]

// tag::squash[]
let squash: Sport = new Sport("Squash", "Un sport de raquette")
squash.afficher();
// end::squash[]

// tag::heritage[]
export class SportDeCompetition extends Sport {
    constructor(nom: string, description: string, public niveau: string) {
        super(nom, description);
    }

    public afficher(): void {
        super.afficher();
        console.log("Niveau : " + this.niveau);
    }
}

// end::heritage[]

// tag::sport_de_competition[]
let tennis: SportDeCompetition = new SportDeCompetition("Tennis", "Un jeu de raquettes", "International");
tennis.afficher();
// end::sport_de_competition[]

// tag::interface[]
export interface Jouable {
    score?: string;

    jouer(joueur1: string, joueur2: string): string
}

// end::interface[]

// tag::implements[]
export class SportJouable extends Sport implements Jouable {
    jouer(joueur1: string, joueur2: string): string {
        let vainqueur = joueur1;
        if (Math.floor(Math.random() * Math.floor(2)) == 0) {
            vainqueur = joueur2;
        }
        return vainqueur;
    }
}

let badminton: Jouable = new SportJouable("Badminton", "Un sport fatigant");
console.log("Le vainqueur est : " + badminton.jouer("Batman", "Superman"));
// end::implements[]

// tag::interface_de_methode[]
export interface jouer {
    (joueur1: string, joueur2: string): string
}

let jouerAuBadminton: jouer = function (joueur1: string, joueur2: string): string {
    console.log(joueur1 + " et " + joueur2 + " joue au badminton");
    return joueur1;
}
console.log("Le vainqueur est " + jouerAuBadminton("Thierry", "Anthony"));
// end::interface_de_methode[]