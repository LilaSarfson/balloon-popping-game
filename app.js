// tu código aquí

//El juego habrá acabado cuando no queden globos
// numerodeGlobos es igual a el numero de veces que pasamos el ratón por encima del las pelotas. O le número de veces que hemos invocado la función. O cada vez que ha ocurrido el evento

let globos = document.querySelectorAll(".balloon");

let numerodeGlobos = 0;

globos.forEach(globo => {
    globo.addEventListener("mouseover", function pelota(event) {
        console.log("Estoy tocando un globo");
        event.target.textContent = "POP";
        event.target.style.backgroundColor = "#ededed";
        event.currentTarget.removeEventListener("mouseover", pelota);
        numerodeGlobos = numerodeGlobos + 1;

        if (numerodeGlobos == globos.length) {
            document.querySelector("#yay-no-balloons").style.display = "block";
            document.querySelector("#ballon-gallery").style.display = "none";

        }
    })


})


