function toggleContenu() {
    var contenu = event.target.nextElementSibling; 
    if (contenu.style.display === "none" || contenu.style.display === "") {
        contenu.style.display = "block";
    } else {
        contenu.style.display = "none";
    }
}
document.getElementById("year").innerHTML = new Date().getFullYear();