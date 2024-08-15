function mensaje() {
    alert ("Hola soy un div")
}

document.addEventListener("DOMContentLoaded", ()  => {
    document.getElementById("botonsito").addEventListener('click',()  => 
        alert ("Hola soy un div"));

});

function saludo() {
    alert("Hola");
}
//*document.addEventListener("DOMContentLoaded ", ()  => 
//document.getElementsByTagName("button").addEventListener('click', saludo()));
//solucion
//separar el div

document.addEventListener("DOMContentLoaded", ()  => {
    document.getElementById("btn").addEventListener('click',()  => 
        alert ("Hola"));

});


