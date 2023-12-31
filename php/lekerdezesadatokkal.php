<?php

// adatbázis php meghívása (erre azért van szükség, mert a database php-ból szükség van $conn (kapcsolat) változóra)
require_once "database.php";



// Megnézzük, hogy az adtot megkapta-e a php
if (isset($_POST["adat"])) {
    //true
    //adatok eltárolása
    $adat = $_POST["adat"];


    // vagy használható $_GET["teljesnev"], ebben az esetben ezt a tipust kell megadni a js-ben.

    //lekérdezés adatokkal
    $sql = "SELECT * FROM adatok WHERE teljesnev like '%$adat%'";


    // statement létrehozása
    $stmt = $conn->prepare($sql);

    // statement futtatása
    $stmt->execute();

    // eredemenyek eltárolása
    $result = $stmt->get_result();

    $data = array();

    // adatok feldolgozása
    if ($result->num_rows > 0) {

        // adatok listává alakítása
        while ($row = $result->fetch_assoc()) {
            $data[] = $row;
        }
    }
    // adatok kiírása JSON formátumban. (Majd ezt dolgozzuk fel a javascript-el)

    header('Content-Type: application/json; charset=utf-8');
    echo json_encode($data);
}

?>