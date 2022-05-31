// Crea la cabecera en función de la lista a mostrar seleccionada
function creaCabecera(texto, tipo = "h1")
{
    let cabecera = document.createElement(tipo);
    let textoCabecera = document.createTextNode(texto);
    cabecera.appendChild(textoCabecera);
    return cabecera;
}

// Genera una tabla automáticamente para mostrar los datos
function creaTabla(object2, texto, tipoTabla)
{
    var body = document.getElementById("tablaDatos");

    var tabla = document.createElement("table");
    var tblBody = document.createElement("tbody");

    let cap = document.getElementById("tablaDatos");
    let cabecera = creaCabecera(texto, "h3");

    cap.appendChild(cabecera);
    let contador = 0;
    for (let i = 0; i < object2.length; i++)
    {
        let {tituloG, imgG, isbnG} = object2[i];

        // Crea las celdas
        for (var h = 0; h < 1; h++)
        {
            // Crea las filas de la tabla
            var columnas = document.createElement("td");


            for (var j = 0; j < 1; j++)
            {
                var tituloB = document.createTextNode(tituloG);
                var imagenB = document.createElement("img");

                var textoCelda = totalLista.appendChild(tituloB);
                var imagenB = totalLista.appendChild(imagenB);


                imagenB.setAttribute("src", imgG);
                imagenB.setAttribute("class", "imagenLista")

                var celda = document.createElement("td");
                var fila1 = document.createElement("tr");
                var fila2 = document.createElement("tr");

                imagenB.setAttribute("id", isbnG);
                imagenB.setAttribute("tipoTabla", tipoTabla);

                celda.appendChild(fila2);
                celda.appendChild(fila1);

                fila2.appendChild(imagenB);
                fila1.appendChild(textoCelda);

                columnas.appendChild(celda);
            }

            tblBody.appendChild(columnas);
        }
        contador++;
        // Posiciona el <tbody> debajo del elemento <table>
        tabla.appendChild(tblBody);
        // Añade <table> al <body>
        body.appendChild(tabla);
        // Añade el atributo "class" a <tablaLibros>  ;
        tabla.setAttribute("class", "tablaLibros");

    }
}