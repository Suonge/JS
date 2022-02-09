function choix(){
    var choisir = prompt("Choisir le mode de calcul : \n 1 : Addition \n 2 : Soustraction \n 3 : Multiplication \n 4 : Division");
    switch(choisir){
        case '1':
            nombres(1);
            break;
        case '2':
            nombres(2);
            break;
        case '3':
            nombres(3);
            break;
        case '4':
            nombres(4);
            break;
        default:
            choix();
    }
}


function nombres(transfert){
    var n1 = prompt("Merci de choisir un premier chiffre.");
    var n2 = prompt("Merci de choisir un deuxième chiffre.");
    n1 = Number(n1);
    n2 = Number(n2);
    if(isNaN(n1) || isNaN(n2)){
        alert("Merci de choisir des chiffres.");
        nombres(transfert);
    } else {
        switch(transfert){
            case 1:
                add(n1,n2);
                break;
            case 2:
                sous(n1,n2);
                break;
            case 3:
                mult(n1,n2);
                break;
            case 4:
                div(n1,n2);
                break;
        }
    }
}

function add(n1,n2){
        let r = n1+n2;
        alert(`Votre résultat est ${r}.`);
}

function sous(n1,n2){
    let r = n1-n2;
    alert(`Votre résultat est ${r}.`);
}

function mult(n1,n2){
    let r = n1*n2;
    alert(`Votre résultat est ${r}.`);
}

function div(n1,n2){
    let r = n1/n2;
    alert(`Votre résultat est ${r}.`);
}


choix()