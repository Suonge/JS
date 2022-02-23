var email = /(?=.*[@]{1})(?=.*[.]{1})/;
var mdp1 = /(?=.*[@$!&])/;
var mdp2 = /(?=.*[0-9])/;
var mdp3 = /(?=.{6,})/;
var mdp4 = /(?=.{9,})/;

var texte = document.querySelectorAll("input");
var h1 = document.querySelectorAll("h1");

var interval = null;
var zonetexte = document.querySelector(".infos");
var zoneenter = document.querySelector(".login");

zoneenter.addEventListener("input",tester);

function tester(){

    if (email.test(texte[0].value)){
        texte[0].style.backgroundColor = "green"; 
    } else if (texte[0].value == ""){
        texte[0].style.backgroundColor = "white"; 
    } else {
       texte[0].style.backgroundColor = "red"; 
    }

    if (mdp1.test(texte[1].value) && mdp2.test(texte[1].value) && mdp3.test(texte[1].value) && mdp4.test(texte[1].value ) == false){
        texte[1].style.backgroundColor = "green";
    }   else {
        texte[1].style.backgroundColor = "white";
    }

    if (mdp1.test(texte[1].value) == false){
        h1[2].style.display = "block";
    } else {
        h1[2].style.display = "none";
    }
    if (mdp2.test(texte[1].value) == false){
        h1[1].style.display = "block";
    } else {
        h1[1].style.display = "none";
    }
    if (mdp3.test(texte[1].value) == false){
        h1[0].style.display = "block";
    } else {
        h1[0].style.display = "none";
    }
    if (mdp4.test(texte[1].value) == true){
        h1[3].style.display = "block";
    } else {
        h1[3].style.display = "none";
    }
    console.log("en cour !");
}