function openImage(src){

    document.getElementById("images-lightbox-image").src = src;

    document.getElementById("images-lightbox").style.display = "flex";

}

function closeImage(){

    document.getElementById("images-lightbox").style.display = "none";

}
