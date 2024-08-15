function mensaje() {
    alert ("Hola soy un div")
}

document.addEventListener("DOMContentLoaded", ()  => {
    document.getElementById("botonsito").addEventListener('click',()  => 
        alert ("Hola soy un div"));

});
