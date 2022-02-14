var bouton = document.querySelectorAll("button");
// var h1 = document.querySelector("h1");
var ul = document.querySelector("ul");
var liste = [];
var supp = [];

bouton[0].addEventListener("click",enregistrement);
var li = document.createElement("li");

function enregistrement(){
    liste.push(document.querySelector("textarea").value);
    // h1.textContent = liste;
    ul.innerHTML += `<li>${liste[liste.length-1]}</li>`;
    document.querySelector("textarea").value = "";
}

bouton[1].addEventListener("click",suppression);

function suppression(){
    // alert("test");
    supp = document.querySelectorAll("li");
    for (i = 0; i != supp.length; i++){
        supp[i].remove();
    }
}
