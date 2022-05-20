function creaCabecera(texto,tipo="h1"){
    let cabecera = document.createElement(tipo);
    let textoCabecera = document.createTextNode(texto);
    cabecera.appendChild(textoCabecera);
    return cabecera;
}

function creaTabla(object2, texto) {

    // Obtener la referencia del elemento body
    var body = document.getElementById("tablaDatos");

    // Crea un elemento <table> y un elemento <tbody>
    var tabla = document.createElement("table");
    var tblBody = document.createElement("tbody");

    //cap = document.createElement("caption");
    let cap = document.getElementById("tablaDatos");
    let cabecera = creaCabecera(texto, "h3");

    cap.appendChild(cabecera);
    let contador = 0;
    for (let i = 0; i < object2.length; i++) {
        let tituloLibro = object2[i].tituloG;
        let imagenLibro = object2[i].imgG;

        //console.log(object2);

        // Crea las celdas
        for (var h = 0; h < 1; h++) {
            // Crea las hileras de la tabla
            var columnas = document.createElement("td");


            for (var j = 0; j < 1; j++) {
                //Crea un elemento <td> y un nodo de texto,el nodo de texto sea el contenido de <td>, ubica el elemento <td> al final de la hilera de la tabla

                var tituloB = document.createTextNode(tituloLibro);
                var imagenB = document.createElement("img");

                var textoCelda = totalLista.appendChild(tituloB);
                var imagenB = totalLista.appendChild(imagenB);
                //console.log(textoCelda);

                imagenB.setAttribute("src", imagenLibro);
                imagenB.setAttribute("class", "imagenLista")
                //console.log(imagenB);

                var celda = document.createElement("td");
                var fila1 = document.createElement("tr");
                var fila2 = document.createElement("tr");

                imagenB.setAttribute("id", contador);

                celda.appendChild(fila2);
                celda.appendChild(fila1);

                fila2.appendChild(imagenB);
                fila1.appendChild(textoCelda);

                columnas.appendChild(celda);

            }

            // agrega la hilera al final de la tabla (al final del elemento tblbody)
            tblBody.appendChild(columnas);
        }
        contador++;
        // posiciona el <tbody> debajo del elemento <table>
        tabla.appendChild(tblBody);
        // appends <table> into <body>
        body.appendChild(tabla);
        // añade el atributo "class" de la tabla ;
        tabla.setAttribute("class", "tablaLibros");

    }
}