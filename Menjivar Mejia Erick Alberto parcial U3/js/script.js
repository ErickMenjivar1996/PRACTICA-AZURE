let trycatchData =document.getElementById("trycatch");
let dataTableData =document.getElementById("mostrarData");

$(document).ready(function (){
    getPost()
    .then(data => data.json())
    .then(posts => {
        setPost(posts);

    }).catch(error =>{
        trycatchData.classList.toggle('hidden');
        trycatchData.innerHTML=error;
    })
})

/* mandar a llmar la API JSON proporcionada */
function getPost() {
    return fetch('https://restcountries.com/v3.1/all');   
}

function setPost(post) {
    post.map((post, i) => {
        /* etiquetas para el cuerpo del tbody */
        let file = document.createElement("tr");
        let bandera = document.createElement("img");
        let nombre = document.createElement("td");
        let nativo = document.createElement("td");
        let capital = document.createElement("td");
        let region = document.createElement("td");
        let idioma = document.createElement("td");
        let localizacion = document.createElement("td");
        let moneda = document.createElement("td");

        /* asignar contenido a las etoquetas del tbody,
        con informacion de API JSON proporcionada */
        bandera.src = post.flags.png;
        bandera.height = "75";
        bandera.width = "100";

        nombre.innerHTML=post.name.common;
        nativo.innerHTML=post.name.nativeName;  /* PROBLEM */
        capital.innerHTML=post.capital;
        region.innerHTML=post.region;
        idioma.innerHTML=post.language; /* PROBLEM */
        localizacion.innerHTML=post.maps.openStreetMaps;
        moneda.innerHTML=post.currencies; /* PROBLEM */

        /* crear filas para la informacin de la tabla */
        dataTableData.appendChild(file);
        file.appendChild(bandera);
        file.appendChild(nombre);
        file.appendChild(nativo);
        file.appendChild(capital);
        file.appendChild(region);
        file.appendChild(idioma);
        file.appendChild(localizacion);
        file.appendChild(moneda);
    });
}