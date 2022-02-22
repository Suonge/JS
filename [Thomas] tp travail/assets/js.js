var texte = document.querySelectorAll("h1");

class Travailleur{
    constructor(nom,corp_de_metier,savoirFaire,competence){
        this.nom = nom;
        this.corp_de_metier = corp_de_metier;
        this.savoirFaire = savoirFaire;
        this.competence = competence;
    }
    au_boulot(){
        texte[0].textContent = `${this.nom} ce met au boulot`;
    }
}

class Informaticien extends Travailleur{
    constructor(nom,savoirFaire,competence,langage){
        super(nom,"Informaticien",savoirFaire,competence);
        this.langage = langage;
    }
    au_boulot(){
        if(this.langage == "javascript"){
            texte[0].textContent = `${this.nom} ce met à coder du langage frénétiquement`;
            this.jet_de_competence();
        } else{
            texte[0].textContent = `${this.langage} c'est quoi ce langage bizarre`;
            this.competence -= 3;
        }
    }
    jet_de_competence(){
        return Math.floor(Math.random()*101);
    }
    acharnement(){
        texte[0].textContent = `${this.nom} code toutes la nuit comme un sauvage !`;
        this.competence += 5;
    }
    affiche_competence(){
        texte[1].textContent = `Votre compétence actuel est à ${this.competence}`;
    }
    methodegrouper(){
        this.au_boulot();
        let jet = this.jet_de_competence();
        if (this.competence >= jet){
            texte[0].textContent = "Au dodo j'ai finis ma journée";
        } else{
            this.acharnement();
        }
        this.affiche_competence();
    }
    rienFoutre(){
        texte[0].textContent = `${this.nom} passe sa journée à regarder la télévision`;
        if (this.competence > 0){
            this.competence -= 5;
        }
        this.affiche_competence();
    }
}

var Roger = new Informaticien("Roger","Programmation",50,"javascript");

// Roger.methodegrouper();




// const readline = require("readline");
// const rl = readline.createInterface({input: process.stdin,output: process.stdout,});

// function question(){
//     rl.question("Bonjour Roger tu veux faire quoi aujourd'hui ? 'auBoulot' ou 'rienFoutre' ?",function(reponse){
//         if (reponse == "auBoulot"){
//             Roger.methodegrouper();
//             question();
//         } else if (reponse == "rienFoutre"){
//             Roger.rienFoutre();
//             question();
//         } else if (reponse == "Je me suicide"){
//             console.log("Adieu monde cruel !");
//             rl.close();
//         } else{
//            console.log("J'ai pas bien compris...");
//            question();
//         }
//     });
// }

// question();

var bouton = document.querySelectorAll("button");
var img = document.querySelector("img");

bouton[0].addEventListener("click",glander);

bouton[1].addEventListener("click",boulot);

bouton[2].addEventListener("click",mort);

function glander(){
    Roger.rienFoutre();
    img.src = "assets/img/dormir.png"
}

function boulot(){
    Roger.methodegrouper();
    img.src = "assets/img/travail.png"
}

function mort(){
    bouton[0].remove();
    bouton[1].remove();
    bouton[2].remove();
    img.src = "assets/img/adieu.png"
    texte[0].textContent = "Vous avez attacher une corde à votre plafond et vous êtes pendus";
    texte[1].textContent = "Merci d'avoir jouer."
}