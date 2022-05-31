// Iniciamos la sesión de Google y muestra una alerta de bienvenida
function onSignIn(googleUser) {
    var profile = googleUser.getBasicProfile();
    var nombre = profile.getName();
    alert("Bienvenid@ " + nombre);
    document.getElementById("descargaLista").style.display = 'block';
}

// Crea un objeto Blob para poder descargar la lista
function descargaListaRecomendacion() {

    var listaR = JSON.stringify(window.localStorage.getItem("listaRecomendaciones"));
    var blob = new Blob([listaR]);
    var link = document.createElement('a');
    link.href = window.URL.createObjectURL(blob);
    link.download = "listaRecomendaciones.txt";
    link.click();
}
