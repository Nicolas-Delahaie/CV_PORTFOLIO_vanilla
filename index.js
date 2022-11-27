function clickImage(event){
    imgHeight = event.target.parentElement.clientHeight;
    imgHeight *= 1.5;
    heightLimit = window.innerHeight*0.65;
    if (imgHeight > heightLimit)
    {
        imgHeight = heightLimit;
    }

    if (event.target.parentElement.classList[-1] != "agrandie")
    {
        event.target.parentElement.style.height = (window.innerHeight*0.65).toString()+"px";
        // event.target.parentElement.style.filter= "brightness(100%)";
        event.target.parentElement.classList.add("agrandie");
    }
    else
    {
        alert("Pas agrandie");
        // event.target.parentElement.style.height = (window.innerHeight*0.10).toString()+"px";
        // event.target.parentElement.classList.remove("agrandie");
    }
    // event.target.parentElement.style.position = "absolute";
    //alert(window.innerHeight +" "+ imgHeight);
}

images = document.getElementsByClassName("photosProjets");
document.addEventListener("click", clickImage);
