

//Conversion en chaine JSON
// var contenu = import('./contenu_FR.json');


var fichier = fetch("http://localhost/Projets_IUT/SITE_PORTFOLIO_CV/src/contenu/contenu_FR.json")                           //Envoie une requete
fichier.then((a) => {
    console.log(a);

    // b.then((c)=> {
    //     const d = c.json;
    //     console.log(d);
    //     contenuSite = c;
    // });
});
// console.log(contenuSite);


function changerLangue(event)
{
    newLang = event.target.getAttribute("id");                                      //Langue associée au bouton cliqué
    pageLang =  document.getElementsByTagName("html")[0].getAttribute("lang");      //Langue actuelle de la page

    if (newLang != pageLang)
    {
        //Changement langue du fichier
        // alert(contenu[]);
        alert("Changement langue");
    }
}   

document.getElementById("zoneLangues").addEventListener("click", changerLangue);   