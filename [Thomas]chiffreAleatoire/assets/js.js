function getRandomNumber(max){
    nombreA = Math.floor(Math.random()*max);
    alert(nombreA);
    trouverNombre(nombreA,max, max);
}

function trouverNombre(nombreAtrouver,recherche,max){
    max = max/2;
    alert(recherche);
    if(Math.floor(recherche) == nombreAtrouver){
        alert("trouver");
        return (nombreAtrouver);
    } else if(recherche > nombreAtrouver){
        recherche -= max;
    }else{
        recherche += max;
    }
    trouverNombre(nombreAtrouver,recherche,max);
}

getRandomNumber(1000);

