let book = JSON.parse(window.localStorage.getItem('selectedBook'));
const listaSeleccionada = JSON.parse(window.localStorage.getItem('listaFavoritos'));
let existe = false;

// Al cargar la pantalla, carga los datos que tengamos guardados
window.onload = function () {
    document.getElementById('resenyaPpal').innerHTML = book.resenya;
    document.getElementById('posit1').innerHTML = book.posit1;
    document.getElementById('posit2').innerHTML = book.posit2;
    document.getElementById('posit3').innerHTML = book.posit3;
}

// Una vez seleccionado el libro, muestra la imagen y el título
function muestraLibro() {

    let titulo = document.getElementById('tituloLibro');
    let img = document.getElementById('imgLibro');
    titulo.innerHTML = book.tituloG;
    img.src = book.imgG;
}

muestraLibro();

$(document).ready(function () {

    $("#guardarResenya").click(function () {

        let resenyaPpal1 = $("#resenyaPpal").val();

        for (let i = 0; i < listaSeleccionada.length; i++) {
            existe = (listaSeleccionada[i].tituloG == book.tituloG) ? true : false;
            if (existe) {
                listaSeleccionada[i].resenya = resenyaPpal1;
                break
            };
        }

        localStorage.setItem('listaFavoritos', JSON.stringify(listaSeleccionada));

    });

    $("#guardarPosit1").click(function () {

        let posit1 = $("#posit1").val();

        for (let i = 0; i < listaSeleccionada.length; i++) {
            existe = (listaSeleccionada[i].tituloG == book.tituloG) ? true : false;
            if (existe) {
                listaSeleccionada[i].posit1 = posit1;
                break
            };
        }

        localStorage.setItem('listaFavoritos', JSON.stringify(listaSeleccionada));

    });

    $("#guardarPosit2").click(function () {

        let posit2 = $("#posit2").val();
        for (let i = 0; i < listaSeleccionada.length; i++) {
            existe = (listaSeleccionada[i].tituloG == book.tituloG) ? true : false;
            if (existe) {
                listaSeleccionada[i].posit2 = posit2;
                break
            };
        }

        localStorage.setItem('listaFavoritos', JSON.stringify(listaSeleccionada));

    });

    $("#guardarPosit3").click(function () {

        let posit3 = $("#posit3").val();
        for (let i = 0; i < listaSeleccionada.length; i++) {
            existe = (listaSeleccionada[i].tituloG == book.tituloG) ? true : false;
            if (existe) {
                listaSeleccionada[i].posit3 = posit3;
                break
            };
        }

        localStorage.setItem('listaFavoritos', JSON.stringify(listaSeleccionada));

    });
});