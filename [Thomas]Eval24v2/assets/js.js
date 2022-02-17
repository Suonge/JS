
// ETABLISSEMENT DE MES LIENS POUR LE TEST !!!

var bouton = document.querySelectorAll("button");
var recherche = document.querySelectorAll("textarea");
var texte = document.querySelector("h2");

// ETABLISSEMENT DE MES VARIABLES POUR MON TEST !!!

// LANCE LE JEU
var enjeu = false;
// NOMBRE A TROUVER
var nombreA = null;
// NOMBRE ENTREE
var nombreC = null;
// COMPTEUR DE TENTATIVES
var compte = 0;
// NOMBRE MAXIMUM
var max = null;
// HISTORIQUE
var historique = [];


// FONCTION POUR GENERE ALEATOIREMENT UN CHIFFRE DE MAXIMUM A
function getRandomNumber(a){
    nombreA = Math.floor(Math.random()*a);
    return nombreA;
}


// ACTIVATION DU BOUTON
bouton[1].addEventListener("click",trouver);

function trouver(){
    // LANCEMENT DU JEU - 
    if (enjeu == false){
        max = recherche[0].value;
        // VERIFICATION QUE LE MAXIMUM EST BIEN UN CHIFFRE POSITIF
        if (isNaN(max) || max == ""){
            texte.textContent = "Merci de donner un nombre en maximum";
        } else if(max < 1) {
            texte.textContent = "Merci de choisir un nombre supérieur à O"
        } else {
            // GENERE LE NOMBRE A TROUVER ET PASSE EN MODE JEU
            nombreA = getRandomNumber(max)+1;
            enjeu = true;
            bouton[1].textContent = "Soumettre";
            // alert(nombreA);
            texte.textContent = "Le nombre à était générer";
            for (i = 0; i < vie.length; i++){
                vie[i].style.backgroundColor = "rgb(51, 255, 0)";
            }
            vies.style.display = "none";
        }
    } else {
        // PRISE DU NOMBRE PROPOSER ET VERFICATION
        nombreC = +recherche[1].value;
        historique.push(nombreC);
        if (nombreC <= 0 || nombreC > max){
            texte.textContent = `Merci de rentrer un nombre compris entre 1 et ${max} !`;
        } else if (nombreC < nombreA){
            texte.textContent = "Le nombre a trouver est plus grand !";
            compte += 1;
        } else if (nombreC > nombreA){
            texte.textContent = "Le nombre a trouver est plus petit !";
            compte += 1;
        // SI JAMAIS LE BON NOMBRE EST TROUVER
        } else if (nombreC == nombreA){
            calculHistorique()
            compte += 1;
            // PASSAGE AU SINGULIER OU PLURIEL
            if (compte == 1){
                texte.textContent = `${nombreA} était le bon nombre, vous l'avez trouver en ${compte} coup !`
            } else {texte.textContent = `${nombreA} était le bon nombre, vous l'avez trouver en ${compte} coups !`}
            bouton[1].textContent = "Recommencer";
            enjeu = false;
            recherche[1].value = null;
            compte = 0;
            historique = [];
            vies.style.display = "block";
        // SI JAMAIS LE NOMBRE PROPOSER EST PAS EN CHIFFRE
        } else {
            texte.textContent = "Merci de mettre un nombre pour la recherche !";
        }
        if (compte > nombvies){
            calculHistorique()
            vie[compte-1].style.backgroundColor = "red";
            texte.textContent = "GAME OVER";
            bouton[1].textContent = "Recommencer";
            enjeu = false;
            recherche[1].value = null;
            compte = 0;
            historique = [];
            vies.style.display = "block";
        } else {
            vie[compte-1].style.backgroundColor = "red";
        }
    }
}

// PASSAGE A L HISTORIQUE ATTENTION ------------------------------------------------- !!!!!!

// LIAISON POUR L HISTORIQUE
var section = document.querySelector("section");
var ul = document.querySelector("ul");

// VARIABLES POUR L HISTORIQUE
var affichagebouton = false;

// APPUYER SUR LE BOUTON
bouton[0].addEventListener("click", affichage);

// AFFICHER L HISTORIQUE
function affichage(){
    if (affichagebouton == false){
        section.style.backgroundColor = "rgba(243, 233, 220, 0.8)";
        ul.style.display = 'block';
        affichagebouton = true;
    } else {
        section.style.backgroundColor = "rgba(243, 233, 220, 0)";
        affichagebouton = false;
        ul.style.display = 'none';
    }
}

function calculHistorique(){

    // CREE LE LI AVEC LE NOMBRE A TROUVER
    createLi = document.createElement("li");
    ul.append(createLi);
    createLi.textContent = `Le nombre à trouver était : ${nombreA}.`;
    
    // CREE LES LI AVEC TOUTES LES PROPOSITIONS
    for(i = 0; i<historique.length; i++){
        createLi = document.createElement("li");
        ul.append(createLi);
        createLi.textContent = `Proposition ${i+1} : ${historique[i]}`;
    }
    bouton[0].style.display = "block";

}



var vies = document.querySelector("select");
var nombvies = null;
var vie = null;
var nav = document.querySelector("nav");

vies.addEventListener("change",creationVies);

function creationVies (){
    nombvies = vies.value;
    vie = document.querySelectorAll(".vie");
    for (i = 0; i < vie.length; i++){
        vie[i].remove();
    }
    for (i = 0; i <= vies.value; i++){
        vie = document.createElement("div");
        nav.append(vie);
        vie.classList.add("vie");
    }
    vie = document.querySelectorAll(".vie");
}

creationVies();