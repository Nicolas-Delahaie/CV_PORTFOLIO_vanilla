var defaultDimensions = new Map();
var idDerniereImage = null;

function clickImage(event){
    event.stopPropagation();
    if (!event.target.parentElement.classList.contains("agrandie"))
    {
        //Taille d image par defaut --> On l agrandie
        degrandissementDernierImage();
        agrandissementImage(event);
    }
    else
    {
        //Taille d image agrandie --> on la remet par defaut
        degrandissementImage(event);
    }
}

function degrandissementDernierImage()
{
    if (idDerniereImage != null)
    {
        //Remise des dimensions par defaut
        var derniereImage = document.getElementById(idDerniereImage);
        derniereImage.style.width = defaultDimensions[idDerniereImage][0];
        derniereImage.style.height = defaultDimensions[idDerniereImage][1];

        //Suppression du centrage
        // decentrerElement(derniereImage);
        
        //Suppresion de la classe agrandie
        derniereImage.classList.remove("agrandie");
    }
}
function agrandissementImage(event)
{
    //Sauvegarde des dimensions avant modification
    defaultDimensions[event.target.parentElement.getAttribute("id")] =  [event.target.parentElement.clientWidth, event.target.parentElement.clientHeight];
    
    //Agrandit l image le plus grand possible 
    imgWidth = event.target.parentElement.clientWidth; 
    imgHeight = event.target.parentElement.clientHeight; 
    coefHeight = imgHeight / imgWidth           //Multiplier la largeur pour avoir la longueur

    widthLimit = window.innerWidth * 0.5;       //Largeur maximum de l image 
    heightLimit = window.innerHeight * 0.9;     //longueur maximum de l image 

    //Essai d agrandissement de la largeur a la taille de la fenetre
    imgWidth = widthLimit;
    imgHeight = imgWidth * coefHeight;
    if (imgHeight > heightLimit)
    {
        //Si la nouvelle photo depasse de l ecran en longueur
        imgHeight = heightLimit;                //Mise par defaut de la longueur
        imgWidth = imgHeight*(1/coefHeight);    //Calcul de la nouvelle largeur
    }
    
    //Assignation des nouvelles largeurs et longueurs
    event.target.parentElement.style.width = imgWidth;
    event.target.parentElement.style.height = imgHeight;

    //Centrage de l element
    // centrerElement(event.target.parentElement);

    //Repositionnement fenetre centree par rapport a l image
    repositionner(event.target.parentElement);
    
    //Ajout de la classe agrandie
    event.target.parentElement.classList.add("agrandie");

    //Maj de l id du dernier element agrandi
    idDerniereImage = event.target.parentElement.getAttribute("id");
}
function repositionner(elmt)
{
    //Positionne la fenetre par rapport a l element tout en restant dans son container
    elmtHeight = elmt.offsetHeight;
    yImage = elmt.offsetTop;
    newY = yImage -(window.innerHeight-elmtHeight) / 2;
    // alert(newY, "    ", elmt.parentElement.innerHeight);
    if (newY > elmt.parentElement.innerHeight) newY = elmt.parentElement.innerHeight;
    window.scrollTo(0, newY);
}
function degrandissementImage(event)
{
    //Remise des dimensions par defaut
    idElement = event.target.parentElement.getAttribute("id");
    event.target.parentElement.style.width = defaultDimensions[idElement][0];
    event.target.parentElement.style.height = defaultDimensions[idElement][1];

    //Decentrage de l element
    decentrerElement(event.target.parentElement);

    //Repositionnement fenetre centree par rapport a l image
    repositionner(event.target.parentElement);

    //Suppresion de la classe agrandie
    event.target.parentElement.classList.remove("agrandie");

    //Maj de l id de la derniere image modifiee
    idDerniereImage = null;
}
function centrerElement(elmt)
{
    var marge = (window.innerWidth - elmt.offsetWidth) / 2;
    elmt.style.margin = "20px "+marge+"px";

}
function decentrerElement(elmt)
{
    elmt.setAttribute("style", "margin: 20px");
}

photos = document.getElementsByClassName("photosProjets");
for (let index = 0; index < photos.length; index++) {
    // photos[index].addEventListener('click', clickImage);
}
document.getElementById("zonePhotosProjets").addEventListener('click', degrandissementDernierImage);

