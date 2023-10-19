// 1. PÉLDA - Szimpla lekérdezés
function lekerdezes() {
    $.ajax({
        type: "POST", // request (kérés) metódus (POST, GET)
        url: "../php/lekerdezes.php" /* itt megívod a használni kivánt php-t*/,
        success: function (response) {
            // hiba kezelés
            try {
                // response lesz az a változó, ami a léekérdezett adatokat tárolja (JSON formátum (Használható foreach stb))
                // az adatokhoz feldolgozásához használható példák
                response.foreach(function (i) {
                   /*Adat hozzáadása az oldalhoz, ez eltérhet, ezt neked kell kiválasztani hogy hogyan jeleníted ,eg az adatot */document.body.innerHTML += i; /* itt általában használni
                     kell így pl: i.teljesnev, az adatbázisban található névvel legyen azonos*/
                });
            } catch (err) {
                // hiba kiírása a console-ra
                console.err(err);
            }
        }

    });

}
// 2. PÉLDA - Lekérdezés adatok átvitelével
function lekerdezes2() {
    //például
    var nev = "Kiss Pista";
    var kor = 23;
    $.ajax({
        type: "POST", // request (kérés) metódus (POST, GET)
        url: "../php/lekerdezesadatokkal.php" /* itt megívod a használni kivánt php-t*/,
        data: { teljesnev: nev, eletkor: kor }, /* Ezt így kérjuk le a php-ban=> $_POST["teljesnev"]; ez fogja tartalmazni
         a teljes nevet (egyszerre számtalan adat is átvihető)*/
        success: function (response) {
            // hiba kezelés
            try {
                // response lesz az a változó, ami a léekérdezett adatokat tárolja (JSON formátum (Használható foreach stb))
                // az adatokhoz feldolgozásához használható példák
                response.foreach(function (i) {
                    /*Adat hozzáadása az oldalhoz, ez eltérhet, ezt neked kell kiválasztani, hogy, hogyan jeleníted meg az adatot */
                    document.body.innerHTML += i.teljesnev;
                    /* itt általában használni
                     kell így pl: i.teljesnev, az adatbázisban található névvel legyen azonos*/
                });
            } catch (err) {
                // hiba kiírása a console-ra
                console.err(err);
            }
        }

    });

}

// 3. PÉLDA adatok feltöltése az adatbázidba
function adatfeltöltese() {
    var nev = "Asd Béla";
    var kor = 12;
    var lakhely = "4700, Mátészalka, Kiss utca 10."
    $.ajax({
        type: "POST", // request (kérés) metódus típusa (POST, GET)
        url: "../php/adatokfeltoltese.php" /* itt megívod a használni kivánt php-t*/,
        data: { teljesnev: nev, eletkor: kor, lakhely: lakhely }, /* Ezt így kérjuk le a php-ban=> $_POST["teljesnev"]; ez fogja tartalmazni
         a teljes nevet (egyszerre számtalan adat is átvihető)*/
        success: function (response) {
            // hiba kezelés
            try {
                if (response === "true") {
                    //Bevitel sikeres
                } else {
                    // Bevitel nem sikerült

                    //hibaüzenet kiírása
                    console.err(response);
                }
            } catch (err) {
                // hiba kiírása a console-ra
                console.err(err);
            }
        }
    });
}