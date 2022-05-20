//Crear onload donde cargue la librería como una variable global
var listaFavoritos = [];
var listaLeido = [];
var listaQuiero = [];
var listaRecomendaciones = [];

function getbooksbytitle() {
    let entrada = document.getElementById("foundlibro").value;
    axios
        .get("https://openlibrary.org/search.json?title=" + entrada)
        .then(response => {
            document.getElementById('titulo').innerHTML = response.data.docs[0].title;
            document.getElementById('imgBuscada').src = "http://covers.openlibrary.org/b/isbn/" + response.data.docs[0].isbn[0] + "-L.jpg?default=false";
            document.getElementById('anyo_publi').innerHTML = response.data.docs[0].publish_date[0];
            document.getElementById('bookisbn').innerHTML = response.data.docs[0].isbn[0];
            document.getElementById('first_sentence').innerHTML = response.data.docs[0].first_sentence;
        })
        .catch(error => {
            document.getElementById('titulo').innerHTML = "Error, título no encontrado. Prueba a buscar un nuevo título."; //En caso de querer saber el error podemos añadir + error
        })
    document.getElementById("busqueda").style.display = 'block';
    document.getElementById("presentacion").style.display = 'none';
}

function getbooksbyisbn() {
    let isbnEntrada = document.getElementById("foundisbn").value;
    axios
        .get("https://openlibrary.org/search.json?q=" + isbnEntrada)
        .then(response => {
            document.getElementById('titulo').innerHTML = response.data.docs[0].title;
            document.getElementById('imgBuscada').src = "http://covers.openlibrary.org/b/isbn/" + response.data.docs[0].isbn[0] + "-L.jpg?default=false";
            document.getElementById('anyo_publi').innerHTML = response.data.docs[0].publish_date[0];
            document.getElementById('bookisbn').innerHTML = response.data.docs[0].isbn[0];
            document.getElementById('first_sentence').innerHTML = response.data.docs[0].first_sentence;
        })
        .catch(error => {
            document.getElementById('titulo').innerHTML = "Error, ISBN no encontrado. Prueba a buscar otro ISBN.";
        })
    document.getElementById("busqueda").style.display = 'block';
    document.getElementById("presentacion").style.display = 'none';
}

function guardarFavorito() {
    //console.log(listaFavoritos);
    let tituloV = document.getElementById('titulo').innerHTML;
    let imagenV = document.getElementById('imgBuscada').src;
    let libroisbn = document.getElementById('bookisbn').innerHTML;
    let contID = 0;
    var object = { contID, 'tituloG': tituloV, 'imgG': imagenV, 'isbnG': libroisbn }; // Creamos un objeto
    let existe = false;
        
    //Se comprueba si existe o no el título
    for (let i = 0; i < listaFavoritos.length; i++) {

        existe = (listaFavoritos[i].tituloG == tituloV) ? true : false;
        if (existe) {
            alert("El libro ya está en la lista")
            break
        };
    }

    if (!existe) {
        console.log("Ese libro no está en la lista");

        listaFavoritos.push(object);

        // Lo guardamos en localStorage pasandolo a cadena con JSON
        localStorage.setItem('listaFavoritos', JSON.stringify(listaFavoritos));

        alert("Libro añadido a favoritos " + tituloV);
    }
}

function guardarLeido() {
    console.log(listaLeido);
    let tituloV = document.getElementById('titulo').innerHTML;
    let imagenV = document.getElementById('imgBuscada').src;
    let libroisbn = document.getElementById('bookisbn').innerHTML;

    var object = { 'tituloG': tituloV, 'imgG': imagenV, 'isbnG': libroisbn }; // Creamos un objeto
    let existe = false;

    //Se comprueba si existe o no el título
    for (let i = 0; i < listaLeido.length; i++) {
        existe = (listaLeido[i].tituloG == tituloV) ? true : false;
        if (existe) {
            alert("El libro ya está en la lista")
            break
        };
    }

    if (!existe) {
        console.log("Ese libro no está en la lista");
        listaLeido.push(object);
        // Lo guardamos en localStorage pasandolo a cadena con JSON
        localStorage.setItem('listaLeido', JSON.stringify(listaLeido));

        alert("Libro añadido a leídos " + tituloV);
    }

}

function guardarQuiero() {

    console.log(listaQuiero);
    let tituloV = document.getElementById('titulo').innerHTML;
    let imagenV = document.getElementById('imgBuscada').src;
    let libroisbn = document.getElementById('bookisbn').innerHTML;

    var object = { 'tituloG': tituloV, 'imgG': imagenV, 'isbnG': libroisbn }; // Creamos un objeto
    let existe = false;

    //Se comprueba si existe o no el título
    for (let i = 0; i < listaQuiero.length; i++) {
        existe = (listaQuiero[i].tituloG == tituloV) ? true : false;
        if (existe) {
            alert("El libro ya está en la lista")
            break
        };
    }

    if (!existe) {
        console.log("Ese libro no está en la lista");
        listaQuiero.push(object);
        // Lo guardamos en localStorage pasandolo a cadena con JSON
        localStorage.setItem('listaQuiero', JSON.stringify(listaQuiero));

        alert("Libro añadido a pendientes " + tituloV);
    }
}

function guardarRecomendacion() {

    console.log(listaRecomendaciones);
    let tituloV = document.getElementById('titulo').innerHTML;
    let imagenV = document.getElementById('imgBuscada').src;
    let libroisbn = document.getElementById('bookisbn').innerHTML;

    var object = { 'tituloG': tituloV, 'imgG': imagenV, 'isbnG': libroisbn }; // Creamos un objeto
    let existe = false;

    //Se comprueba si existe o no el título
    for (let i = 0; i < listaRecomendaciones.length; i++) {
        existe = (listaRecomendaciones[i].tituloG == tituloV) ? true : false;
        if (existe) {
            alert("El libro ya está en la lista")
            break
        };
    }

    if (!existe) {
        console.log("Ese libro no está en la lista");
        listaRecomendaciones.push(object);
        // Lo guardamos en localStorage pasandolo a cadena con JSON
        localStorage.setItem('listaRecomendaciones', JSON.stringify(listaRecomendaciones));

        alert("Libro añadido a recomendaciones " + tituloV);
    }
}

/*
$(function () {
    var contador = 0;

    $("#btn-Fav").click(function () {
        var object2 = JSON.parse(localStorage.getItem('listaFavoritos'));

        let elemento = document.getElementById("totalLista");
        let texto = "Libros leídos: " + object2.length;
        let cabecera = creaCabecera(texto, "h3");
        elemento.append(cabecera);



        for (let i = 0; i < object2.length; i++) {
            let tituloLibro = object2[i].tituloG;
            let imagenLibro = object2[i].imgG;

            console.log(object2);

            // Obtener la referencia del elemento body
            var body = document.getElementById("tablaDatos");

            // Crea un elemento <table> y un elemento <tbody>
            var tabla = document.createElement("table");
            var tblBody = document.createElement("tbody");

            // Crea las celdas
            for (var h = 0; h < 1; h++) {
                // Crea las hileras de la tabla
                var hilera = document.createElement("tr");

                for (var j = 0; j < 2; j++) {
                    //Crea un elemento <td> y un nodo de texto,el nodo de texto sea el contenido de <td>, ubica el elemento <td> al final de la hilera de la tabla

                    var tituloB = document.createTextNode(tituloLibro);
                    tituloLibro = document.getElementById("tituloLibro");
                    //tituloLibro.appendChild(tituloB);

                    let imagenB = document.getElementById("imagenLibro");
                    imagenB.setAttribute("src", imagenLibro);
                    console.log(imagenB);
                    //imagenB.appendChild("img");
                    var celda = document.createElement("td");
                 
                    var textoCelda = tituloLibro.appendChild(tituloB);
                    var imgCelda = imagenLibro.appendChild(imagenB);
                    //imgCelda.setAttribute("src", imagenLibro);
                    console.log(textoCelda);

                    celda[0].appendChild(textoCelda);
                    celda[0].appendChild(imgCelda);
                    //celda.appendChild(imagenCelda);
                    //imagenCelda.appendChild(imagenTabla);
                    hilera.appendChild(celda);
                   // hilera.appendChild(celda);
                    //hilera.appendChild(imagenB);
                }

                // agrega la hilera al final de la tabla (al final del elemento tblbody)
                tblBody.appendChild(hilera);
            }

            // posiciona el <tbody> debajo del elemento <table>
            tabla.appendChild(tblBody);
            // appends <table> into <body>
            body.appendChild(tabla);
            // modifica el atributo "border" de la tabla y lo fija a "2";
            tabla.setAttribute("border", "0.5");

    })
})
*/

$(function () {

    $("#btn-Fav").click(function () {
        vaciarDiv();
        var object2 = JSON.parse(localStorage.getItem('listaFavoritos'));
        let texto = "Libros añadidos a favoritos: " + object2.length;
        creaTabla(object2, texto);
        captura_id(object2);
    })

    $("#btn-Leido").click(function () {
        vaciarDiv();
        var object2 = JSON.parse(localStorage.getItem('listaLeido'));
        let texto = "Libros leídos: " + object2.length;
        creaTabla(object2, texto);
        recogeLista(object2);
    })

    $("#btn-Quiero").click(function () {
        vaciarDiv();
        var object2 = JSON.parse(localStorage.getItem('listaQuiero'));
        let texto = "Libros pendientes de leer: " + object2.length;
        creaTabla(object2, texto);
        recogeLista(object2);
    })

    $("#btn-Recomendacion").click(function () {
        vaciarDiv();
        var object2 = JSON.parse(localStorage.getItem('listaRecomendaciones'));
        let texto = "Libros que me han recomendado: " + object2.length;
        creaTabla(object2, texto);
        recogeLista(object2);
    })
})

function vaciarDiv() {
    var limpio = document.getElementById('tablaDatos');
    while (limpio.firstChild) {
        limpio.removeChild(limpio.firstChild);
    }
  }