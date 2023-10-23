<?php
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "adatok";

// Kapcsolódás
$conn = new mysqli($servername, $username, $password, $dbname);
// UTF-8 kódolás beállítása (a lekérdezett adatok miatt fontos)
$conn->set_charset("utf8");

// Kapcsolat ellenőrzése
if ($conn->connect_error) {
    die("Hiba a kapcsolódás során: " . $conn->connect_error);
}


?>