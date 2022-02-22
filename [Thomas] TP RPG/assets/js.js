// Variables et liens pour les annonces d'actions !!!
var annonce = document.querySelector(".texte");
var creannonce = null;
var sectionannonce = document.querySelector("#Milieu");

// Liens pour la barre de pv (avec les fonctions associer)
var santeA = document.querySelector(".pvA");
var santeG = document.querySelector(".pvG");

// Lien bouton et compteur d'étapes pour le combat
var bouton = document.querySelector("button");
var etape = 0;



// CLASSE PRINCIPAL PERSONNAGE ---------------------------------------------
class Personnage{
    constructor(pseudo,classe,sante,attaque){
        this.pseudo = pseudo;
        this.classe = classe;
        this.sante = sante;
        this.attaque = attaque;
        this.niveau = 1;
    }
    // METHODE DE GAIN DE NIVEAU !!!
    evoluer(){
        this.niveau += 1;
        creannonce = document.createElement("p");
        creannonce.textContent = `${this.pseudo} passe au niveau ${this.niveau}`;
        sectionannonce.append(creannonce);
    }
    // VERIFICATION DE SANTER POUR SAVOIR SI UN DES PERSONNAGES ARRIVE A 0 PV
    verifierSante(){
        if(this.sante <= 0){
            this.sante = 0;
            creannonce = document.createElement("p");
            creannonce.textContent = `${this.pseudo} a perdu !`;
            sectionannonce.append(creannonce);
        }
    }
    // DONNE LES INFORMATIONS DES PERSONNAGES !!!
    informations(){
        creannonce = document.createElement("p");
        creannonce.textContent = `${this.pseudo} ${this.classe} a ${this.sante} points de vie et est au niveau ${this.niveau}`;
        sectionannonce.append(creannonce);
    }
}



// SOUS CLASSE MAGICIEN ------------------------------------------
class Magicien extends Personnage{
    constructor(pseudo){
        super(pseudo,"Magicien",170,90);
    }
    attaquer(personnage){
        personnage.sante -= this.attaque;
        creannonce = document.createElement("p");
        creannonce.textContent = `${this.pseudo} attaque ${personnage.pseudo} en lançant un sort (${this.attaque} dégâts)`;
        sectionannonce.append(creannonce);
        this.evoluer();
        personnage.verifierSante();
        retirerPVa(personnage.sante);
    }
    coupSpecial(personnage){
        personnage.sante -= this.attaque*5;
        creannonce = document.createElement("p");
        creannonce.textContent = `${this.pseudo} attaque avec son coup spécial puissance des arcanes ${personnage.pseudo} (${this.attaque*5} dégâts)`;
        sectionannonce.append(creannonce);
        this.evoluer();
        personnage.verifierSante();
        retirerPVa(personnage.sante);
    }
}

// SOUS CLASSE GUERRIER -------------------------------------
class Guerrier extends Personnage{
    constructor(pseudo){
        super(pseudo,"Guerrier",350,50);
    }
    attaquer(personnage){
        personnage.sante -= this.attaque;
        creannonce = document.createElement("p");
        creannonce.textContent = `${this.pseudo} attaque ${personnage.pseudo} en donnant un coup d'épée (${this.attaque} dégâts)`;
        sectionannonce.append(creannonce);
        this.evoluer();
        personnage.verifierSante();
        retirerPVg(personnage.sante);
    }
    coupSpecial(personnage){
        personnage.sante -= this.attaque*5;
        creannonce = document.createElement("p");
        creannonce.textContent = `${this.pseudo} attaque avec son coup spécial hache de guerre ${personnage.pseudo} (${this.attaque*5} dégâts)`;
        sectionannonce.append(creannonce);
        this.evoluer();
        personnage.verifierSante();
        retirerPVg(personnage.sante);
    }
}

// 
// CREATION DES PERSONNAGES !!!! ---------------
var aragorn = new Guerrier("Aragorn");
var gandalf = new Magicien("Gandalf");

// ACTIVATION DU BOUTON 
bouton.addEventListener("click",suivant);

// LISTE DES ETAPES --------------------
function suivant(){
    if (etape == 0){
        aragorn.informations();
        gandalf.informations();
    } else if (etape == 1){
        gandalf.attaquer(aragorn);
        aragorn.informations();
    } else if (etape == 2){
        aragorn.attaquer(gandalf);
        gandalf.informations();
    } else if (etape == 3){
        gandalf.coupSpecial(aragorn);
        bouton.textContent = "Recommencer";
    } else if (etape == 4){
        // REMISE A 0 DU COMBAT ----------------------------
        aragorn.sante = 350;
        gandalf.sante = 170;
        aragorn.niveau = 1;
        gandalf.niveau = 1;
        etape = 0;
        let suppannonce = document.querySelectorAll("p");
        for (i = 0; i < suppannonce.length; i++){
            suppannonce[i].remove();
        }
        retirerPVa(aragorn.sante);
        retirerPVg(gandalf.sante);
        bouton.textContent = "Suivant";
    }
    etape += 1;
}


// DIMINUER LA BARRE DE PV DE ARAGORN ------------
function retirerPVa(a){
    let passageA = a/350;
    passageA = passageA*100;
    santeA.style.width = `${passageA}%`;
}

// DIMINUER LA BARRE DE PV DE GANDALF --------------
function retirerPVg(a){
    let passageA = a/170;
    passageA = passageA*100;
    santeG.style.width = `${passageA}%`;
}
