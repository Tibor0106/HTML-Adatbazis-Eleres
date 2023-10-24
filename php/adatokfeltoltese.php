<?php
require_once "database.php";

// adatok ellenőzése
if (isset($_POST["teljesnev"]) && isset($_POST["eletkor"]) && isset($_POST["szulido"])) {
    // Adatok tárolása
    $teljesnev = $_POST["teljesnev"];
    $kor = $_POST["eletkor"];
    $szulido = $_POST["szulido"];
    $sql = "INSERT INTO adatok (teljesnev, kor, szulido) VALUES ('$teljesnev', $kor, '$szulido')";
    if ($conn->query($sql) === TRUE) {
        /*Ha sikeres (ezt majd a js-ben a "response" változó tárolja, és ott tudod kezelni) */
        echo "true";
    } else {
        echo "false";
    }
}
?>