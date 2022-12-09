
//Initialisation contenu page
changerLangue("fr");

function majElementsPage(contenuJson)
{
    // -------- CV --------
    //Titre principal
    document.querySelector("#titrePrincipal_cv > h1").textContent = contenuJson["titrePrincipal"]["nom"];
    document.querySelector("#titrePrincipal_cv > h2").textContent = contenuJson["titrePrincipal"]["profession"];
    //Informations personnelles
    let elmts = document.querySelectorAll("#informationsPersonnelles > section")
    elmts[0].children[1].textContent = contenuJson["informationsPersonnelles"]["adresse"];
    elmts[1].children[1].textContent = contenuJson["informationsPersonnelles"]["numero"];
    elmts[2].children[1].textContent = contenuJson["informationsPersonnelles"]["mail"];
    elmts[3].children[1].textContent = contenuJson["informationsPersonnelles"]["date_de_naissance"];
    elmts[4].children[1].textContent = contenuJson["informationsPersonnelles"]["permis"];
    elmts[5].children[0].textContent = contenuJson["informationsPersonnelles"]["linkedin"]["lien"];
    elmts[5].children[1].textContent = contenuJson["informationsPersonnelles"]["linkedin"]["nomProfil"];
    //Objectifs
    document.querySelector("#objectifs > section > h2").textContent = contenuJson["objectifs"]["titre"];
    document.querySelector("#objectifs > p").textContent = contenuJson["objectifs"]["contenu"];
    //Formations
    document.querySelector("#formations > h2").textContent = contenuJson["formations"]["titre"];
    elmts = document.querySelectorAll("#formations > article");
    for (let i = 0; i < elmts.length; i++) {
        //Pour chaque formation
        const elmt = elmts[i];
        elmt.querySelector("h3").textContent = contenuJson["formations"]["contenu"][i]["formation"];
        elmt.querySelector("p").textContent = contenuJson["formations"]["contenu"][i]["duree"];
        const details = elmt.querySelectorAll("ul > li");
        for (let n = 0; n < details.length; n++)
        {
            //Pour chaque detial de la formation
            detail = details[n];
            detail.textContent = contenuJson["formations"]["contenu"][i]["details"][n];
        }
        
    }
    //Savoir faire
    document.querySelector("#savoir_faire h2").textContent = contenuJson["savoir_faire"]["titre"];
    elmts = document.querySelectorAll("#savoir_faire > ul > *");
    for (let i = 0; i < elmts.length; i++) {
        const elmt = elmts[i];
        if (elmt.tagName != "UL")
        {
            let chaine = contenuJson["savoir_faire"]["Contenu"][i];
            elmt.innerHTML = "<strong>"+chaine[0]+"</strong>"+chaine[1];
        }
        else
        {
            enfants = elmt.children;
            for (let n = 0; n < enfants.length; n++) {
                const enfant = enfants[n];
                enfant.textContent =  contenuJson["savoir_faire"]["Contenu"][i][n];
            }
        }
    }
    //Savoir etre
    document.querySelector("#savoir_etre h2").textContent = contenuJson["savoir_etre"]["titre"];
    elmts = document.querySelectorAll("#savoir_etre > ul > *");
    for (let i = 0; i < elmts.length; i++) {
        const elmt = elmts[i];
        {
            let chaine = contenuJson["savoir_etre"]["Contenu"][i];
            elmt.innerHTML = "<strong>"+chaine[0]+"</strong>"+chaine[1];
        }
    }


    // -------- Portfolio --------
}
function changerLangue(newLang)
{
    console.log(newLang);
    //Recuperation du json
    var url = "http://localhost/CV_Portfolio/src/datas/contenu_"+newLang+".json"
    var request = new XMLHttpRequest();
    request.open('GET', url);
    request.responseType = 'json';
    request.send();

    //Maj des elements graphiques
    request.onload = function(){
        majElementsPage(request.response);
    }
}
function clicLangue(event)
{
    newLang = event.target.getAttribute("id");                                      //Langue associée au bouton cliqué
    pageLang =  document.getElementsByTagName("html")[0].getAttribute("lang");      //Langue actuelle de la page

    if (newLang != pageLang)
    {
        // - S il faut changer la langue -
        //Changement langue dans l entete du site (head)
        document.getElementsByTagName("html")[0].setAttribute("lang", newLang);
        changerLangue(newLang);
    }
}   
document.getElementById("zoneLangues").addEventListener("click", clicLangue);   

