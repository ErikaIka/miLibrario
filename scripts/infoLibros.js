var object1 = JSON.parse(localStorage.getItem('listaFavoritos'));
var object2 = JSON.parse(localStorage.getItem('listaLeido'));
var object3 = JSON.parse(localStorage.getItem('listaQuiero'));
var object4 = JSON.parse(localStorage.getItem('listaRecomendaciones'));

/*

// Capturamos el click y lo pasamos a una funcion
tablaDatos.onclick = captura_id;
var id ;
function captura_id(e) {

    id = e.target.getAttribute("id");
    if (id && id != "tablaDatos" && id != null) {
        //console.log(id);
        //window.location.href="paginaLibro.html";
        return (id);
    }
}

function recogeLista(objetoLista, id) {

    var id2 = id;
    objetoLista.forEach(function (elemento, indice) {
        console.log(indice);
        
        return (indice);
    })
    console.log(id2);
    //console.log(objetoLista[2]);
}
*/
function muestraLibro(id, indice) {

}

// Capturamos el click y lo pasamos a una funcion
tablaDatos.onclick = captura_id;
var id;
function captura_id(e) {

    id = e.target.getAttribute("id");
    if (id && id != "tablaDatos" && id != null) {
        //console.log(id);
        //window.location.href="paginaLibro.html";
        recogeLista(id);
    }
    else{
        console.log("estás jodida y lo sabes");
    }
}

function recogeLista(objetoLista, id1) {
    var id2 = id1;
    objetoLista.forEach(function (elemento, indice) {
        console.log(indice);    
        //return (indice);
    })
    //console.log(objetoLista[2]);
    console.log(id2);
}
/*
// Creamos un array vacio
//var ElementosClick = new Array();
// Capturamos el click y lo pasamos a una funcion
tablaDatos.onclick = captura_id;

function captura_id(e) {
    // Funcion para capturar el click del raton
    var HaHechoClick;
    if (e == null) {
        // Si hac click un elemento, lo leemos
        HaHechoClick = event.srcElement.tagName;
        console.log("elemento");
    } else { // Cerrar comentario AQUI
        // Si ha hecho click sobre un destino, lo leemos
        //HaHechoClick = e.target.tagName;
        const id = e.target.getAttribute("id");
        if (id && id != "tablaDatos") {
            console.log("YAS");
            window.location.href = "paginaLibro.html";
            return (id);
        }
    }
    // Añadimos el elemento al array de elementos
    //ElementosClick.push(HaHechoClick);
    // Una prueba con salida en consola
    //console.log("Contenido sobre lo que ha hecho click:" + HaHechoClick);
}
*/
/*
function recogeLista(objetoLista) {

    objetoLista.forEach(function (elemento, indice) {
        console.log(indice);
    })
    objetoLista.forEach(function (elemento, indice, array) {
        console.log("Esto es recogelista");
        elemento = e.target;
        console.log(elemento);
    })
    //console.log(objetoLista);
    //console.log("1");
}

*/