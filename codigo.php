<?php 

$nombre = $_POST['nombre'];
$correo = $_POST['correo'];
$pass = $_POST['contrasena'];
$passCifrada = password_hash($pass,PASSWORD_DEFAULT);
echo $passCifrada;
