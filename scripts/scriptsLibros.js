//Crear onload donde cargue la librería como una variable global
var listaFavoritos = [];
var listaFavoritosPersistente = JSON.parse(window.localStorage.getItem('listaFavoritos'));
var listaLeido = [];
var listaLeidoPersistente = JSON.parse(window.localStorage.getItem('listaLeido'));
var listaQuiero = [];
var listaQuieroPersistente = JSON.parse(window.localStorage.getItem('listaQuiero'));
var listaRecomendaciones = [];
var listaRecomendacionesPersistente = JSON.parse(window.localStorage.getItem('listaRecomendaciones'));

function getbooksbytitle()
{
    let entrada = document.getElementById("foundlibro").value;
    axios
        .get("https://openlibrary.org/search.json?title=" + entrada)
        .then(response =>
        {
            document.getElementById('titulo').innerHTML = response.data.docs[0].title;
            document.getElementById('imgBuscada').src = "http://covers.openlibrary.org/b/isbn/" + response.data.docs[0].isbn[0] + "-L.jpg?default=false";
            document.getElementById('anyo_publi').innerHTML = response.data.docs[0].publish_date[0];
            document.getElementById('bookisbn').innerHTML = response.data.docs[0].isbn[0];
            document.getElementById('first_sentence').innerHTML = response.data.docs[0].first_sentence;
        })
        .catch(error =>
        {
            document.getElementById('titulo').innerHTML = "Error, título no encontrado. Prueba a buscar un nuevo título."; //En caso de querer saber el error podemos añadir + error
        })
    document.getElementById("busqueda").style.display = 'block';
    document.getElementById("presentacion").style.display = 'none';
}

function getbooksbyisbn()
{
    let isbnEntrada = document.getElementById("foundisbn").value;
    axios
        .get("https://openlibrary.org/search.json?q=" + isbnEntrada)
        .then(response =>
        {
            document.getElementById('titulo').innerHTML = response.data.docs[0].title;
            document.getElementById('imgBuscada').src = "http://covers.openlibrary.org/b/isbn/" + response.data.docs[0].isbn[0] + "-L.jpg?default=false";
            document.getElementById('anyo_publi').innerHTML = response.data.docs[0].publish_date[0];
            document.getElementById('bookisbn').innerHTML = response.data.docs[0].isbn[0];
            document.getElementById('first_sentence').innerHTML = response.data.docs[0].first_sentence;
        })
        .catch(error =>
        {
            document.getElementById('titulo').innerHTML = "Error, ISBN no encontrado. Prueba a buscar otro ISBN.";
        })
    document.getElementById("busqueda").style.display = 'block';
    document.getElementById("presentacion").style.display = 'none';
}

function guardarFavorito()
{
    //console.log(listaFavoritos);
    let tituloV = document.getElementById('titulo').innerHTML;
    let imagenV = document.getElementById('imgBuscada').src;
    let libroisbn = document.getElementById('bookisbn').innerHTML;
    let resenya, posit1, posit2, posit3;
    
    // Creamos el objeto
    var object = { 'tituloG': tituloV, 'imgG': imagenV, 'isbnG': libroisbn, resenya : " ", posit1 : " ", posit2 : " ", posit3 : " " }; 
    let existe = false;

    if(listaFavoritosPersistente) listaFavoritos = listaFavoritosPersistente;
    //Se comprueba si existe o no el título
    for (let i = 0; i < listaFavoritos.length; i++)
    {

        existe = (listaFavoritos[i].tituloG == tituloV) ? true : false;
        if (existe)
        {
            alert("El libro ya está en la lista")
            break
        };
    }

    if (!existe)
    {
        console.log("Ese libro no está en la lista");

        listaFavoritos.push(object);

        // Lo guardamos en localStorage pasandolo a cadena con JSON
        localStorage.setItem('listaFavoritos', JSON.stringify(listaFavoritos));

        alert("Libro añadido a favoritos " + tituloV);
    }
}

function guardarLeido()
{
    //console.log(listaLeido);
    let tituloV = document.getElementById('titulo').innerHTML;
    let imagenV = document.getElementById('imgBuscada').src;
    let libroisbn = document.getElementById('bookisbn').innerHTML;

    var object = { 'tituloG': tituloV, 'imgG': imagenV, 'isbnG': libroisbn }; // Creamos un objeto
    let existe = false;

    if(listaLeidoPersistente) listaLeido = listaLeidoPersistente;
    //Se comprueba si existe o no el título
    for (let i = 0; i < listaLeido.length; i++)
    {
        existe = (listaLeido[i].tituloG == tituloV) ? true : false;
        if (existe)
        {
            alert("El libro ya está en la lista")
            break
        };
    }

    if (!existe)
    {
        console.log("Ese libro no está en la lista");
        listaLeido.push(object);
        // Lo guardamos en localStorage pasandolo a cadena con JSON
        localStorage.setItem('listaLeido', JSON.stringify(listaLeido));

        alert("Libro añadido a leídos " + tituloV);
    }

}

function guardarQuiero()
{
    //console.log(listaQuiero);
    let tituloV = document.getElementById('titulo').innerHTML;
    let imagenV = document.getElementById('imgBuscada').src;
    let libroisbn = document.getElementById('bookisbn').innerHTML;

    var object = { 'tituloG': tituloV, 'imgG': imagenV, 'isbnG': libroisbn }; // Creamos un objeto
    let existe = false;

    if(listaQuieroPersistente) listaQuiero = listaQuieroPersistente;
    //Se comprueba si existe o no el título
    for (let i = 0; i < listaQuiero.length; i++)
    {
        existe = (listaQuiero[i].tituloG == tituloV) ? true : false;
        if (existe)
        {
            alert("El libro ya está en la lista")
            break
        };
    }

    if (!existe)
    {
        console.log("Ese libro no está en la lista");
        listaQuiero.push(object);
        // Lo guardamos en localStorage pasandolo a cadena con JSON
        localStorage.setItem('listaQuiero', JSON.stringify(listaQuiero));

        alert("Libro añadido a pendientes " + tituloV);
    }
}

function guardarRecomendacion()
{
    //console.log(listaRecomendaciones);
    let tituloV = document.getElementById('titulo').innerHTML;
    let imagenV = document.getElementById('imgBuscada').src;
    let libroisbn = document.getElementById('bookisbn').innerHTML;

    var object = { 'tituloG': tituloV, 'imgG': imagenV, 'isbnG': libroisbn }; // Creamos un objeto
    let existe = false;

    if(listaRecomendacionesPersistente) listaRecomendaciones = listaRecomendacionesPersistente;
    //Se comprueba si existe o no el título
    for (let i = 0; i < listaRecomendaciones.length; i++)
    {
        existe = (listaRecomendaciones[i].tituloG == tituloV) ? true : false;
        if (existe)
        {
            alert("El libro ya está en la lista")
            break
        };
    }

    if (!existe)
    {
        console.log("Ese libro no está en la lista");
        listaRecomendaciones.push(object);
        // Lo guardamos en localStorage pasandolo a cadena con JSON
        localStorage.setItem('listaRecomendaciones', JSON.stringify(listaRecomendaciones));

        alert("Libro añadido a recomendaciones " + tituloV);
    }
}

$(function ()
{

    $("#btn-Fav").click(function ()
    {
        vaciarDiv();
        var object2 = JSON.parse(localStorage.getItem('listaFavoritos'));
        let texto = "Libros añadidos a favoritos: " + object2.length;
        creaTabla(object2, texto, 'listaFavoritos');
        
    })

    $("#btn-Leido").click(function ()
    {
        vaciarDiv();
        var object2 = JSON.parse(localStorage.getItem('listaLeido'));
        let texto = "Libros leídos: " + object2.length;
        creaTabla(object2, texto, 'listaLeidos');
        
    })

    $("#btn-Quiero").click(function ()
    {
        vaciarDiv();
        var object2 = JSON.parse(localStorage.getItem('listaQuiero'));
        let texto = "Libros pendientes de leer: " + object2.length;
        creaTabla(object2, texto, 'listaQuiero');
        
    })

    $("#btn-Recomendacion").click(function ()
    {
        vaciarDiv();
        var object2 = JSON.parse(localStorage.getItem('listaRecomendaciones'));
        let texto = "Libros que me han recomendado: " + object2.length;
        creaTabla(object2, texto, 'listaRecomendaciones');
        
    })
})

function vaciarDiv()
{
    var limpio = document.getElementById('tablaDatos');
    while (limpio.firstChild)
    {
        limpio.removeChild(limpio.firstChild);
    }
}