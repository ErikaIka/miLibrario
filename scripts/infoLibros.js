// Capturamos el click y lo pasamos a una funcion que recogerá el id (ISBN) del objeto y la lista
tablaDatos.onclick = captura_id;
var id;
function captura_id(e)
{
    id = e.target.getAttribute("id");
    tipoTabla = e.target.getAttribute("tipoTabla");
    lista = JSON.parse(localStorage.getItem(tipoTabla));
    console.log(lista);
    if (id && id != "tablaDatos")
    {
        recogeLista(lista, id);
    }
    else
    {
        console.log("No tengo nada para ti");
    }
}

/**
 * Con los datos de la función anterior, pasados por parámetro, comprueba en la lista si coincide con el id
 * con alguno de los objetos. Envía los datos al html correspondiente
 */ 
function recogeLista(objetoLista, id1)
{
    window.localStorage.removeItem('selectedBook');
    let selectedItem = objetoLista.filter((element) => { return element.isbnG == id1 })[0];
    window.localStorage.setItem('selectedBook', JSON.stringify(selectedItem));
    if(selectedItem?.tituloG) window.location.href = "paginaLibro.html";
}
