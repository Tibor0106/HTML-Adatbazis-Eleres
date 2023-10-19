<?php

// adatbázis php meghívása (erre azért van szökség, mert a database php-ból szükség van $conn (kapcsolat) változóra)
require_once "database.php";

/* Ide kell a lekérdező SQL parancs (Beillesztés előtt érdemes teszteni a parancsot, 
ha nem jó a parancs akkor a console-on 
500-as hibát látsz)*/
$sql = "SELECT * FROM tabla";


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
/* adatok kiírása JSON formátumban. (Majd ezt dolgozzuk fel a javasctript-el) ezt használjuk több lehetséges adatnál.
pl: keresés funkció, termékek lekérdezése (én legtőbb esetben ebben a formában használom).
*/

header('Content-Type: application/json; charset=utf-8');
echo json_encode($data);
?>