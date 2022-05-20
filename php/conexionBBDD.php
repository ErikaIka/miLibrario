<?php
if(isset($_POST["tituloV"])){
    $tituloV = $_POST["tituloV"];
    $imagenV = $_POST["imagenV"];
    $anyo_publicacion = $_POST["anyo_publicacion"];
    $libroisbn = $_POST["libroisbn"];
    $servidor = "localhost";
    $usuario = "root";
    $password = "";
    $dbname = "mibiblioteca";
    $conexion = mysqli_connect($servidor, $usuario, $password, $dbname);
    if (!$conexion) {
        echo "Error en la conexion a MySQL: ".mysqli_connect_error();
        exit();
    }
    $sql = "INSERT INTO libro (titulo, imagen, anyo_publicacion, isbn) VALUES ('".$tituloV."','".$imagenV."','".$anyo_publicacion."','".$libroisbn."')";
    if (mysqli_query($conexion, $sql)) {
        echo "Registro insertado correctamente.";
    } else {
        echo "Error: " . $sql . "<br>" . mysqli_error($conexion);
    }
}
?>
