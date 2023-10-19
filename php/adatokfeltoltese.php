<?php
require_once "database.php";

// adatok ellenőzése
if (isset($_POST["teljesnev"]) && isset($_POST["szuldatum"]) && isset($_POST["lakhely"])) {
    // Adatok tárolása
    $teljesnev = $_POST["teljesnev"];
    $szuldatum = $_POST["szuldatum"];
    $lakhely = $_POST["lakhely"];
    $sql = "INSERT INTO adat (teljesnev, szuldatum, lakhely) VALUES ('$teljesnev', '$szuldatum', '$lakhely')";
    if ($conn->query($sql) === TRUE) {
        /*Ha sikeres (ezt majd a js-ban a "response" változó tárolja, és ott tudod kezelni) */
        echo "true";
    } else {
        echo "false";
    }
}
?>