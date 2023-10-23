// 1. PÉLDA - Szimpla lekérdezés
function lekerdezes() {
    $.ajax({
        type: "POST", // request (kérés) metódus (POST, GET)
        url: "php/lekerdezes.php" /* itt megívod a használni kivánt php-t*/,
        success: function (data) {
            $("#adatok").empty(); // adatmezők ürítése
            // hiba kezelés
            try {
                // response lesz az a változó, ami a léekérdezett adatokat tárolja (JSON formátum (Használható foreach stb))
                // az adatokhoz feldolgozásához használható példák

                /*Adat hozzáadása az oldalhoz, ez eltérhet, ezt neked kell kiválasztani hogy hogyan jeleníted ,eg az adatot document.body.innerHTML += i;*/ /* itt általában használni
                  kell így pl: i.teljesnev, az adatbázisban található névvel legyen azonos*/

                //példa
                //adatok hozzáadása

                data.forEach(i => {
                    $("#adatok").append(elem(i.teljesnev, i.kor, i.szulido, i.id));
                });

            } catch (err) {
            }
        }

    });

}
lekerdezes();

// 2. PÉLDA - Lekérdezés adatok átvitelével
function lekerdezes2(adat) {
    //például

    $.ajax({
        type: "POST", // request (kérés) metódus (POST, GET)
        url: "php/lekerdezesadatokkal.php" /* itt megívod a használni kivánt php-t*/,
        data: { adat: adat }, /* Ezt így kérjuk le a php-ban=> $_POST["teljesnev"]; ez fogja tartalmazni
         a teljes nevet (egyszerre számtalan adat is átvihető)*/
        success: function (data) {
            $("#adatok").empty();

            // response lesz az a változó, ami a léekérdezett adatokat tárolja (JSON formátum (Használható foreach stb))
            // az adatokhoz feldolgozásához használható példák

            /*Adat hozzáadása az oldalhoz, ez eltérhet, ezt neked kell kiválasztani, hogy, hogyan jeleníted meg az adatot */
            /* itt általában használni
             kell így pl: i.teljesnev, az adatbázisban található névvel legyen azonos*/
            if (data.length === 0) {
                $("#adatok").append('<h3 class="text-center">Nincs találat</h3>');
                return;
            }
            data.forEach(i => {
                $("#adatok").append(elem(i.teljesnev, i.kor, i.szulido, i.id));
            });
        }
    });
}
function elem(nev, kor, szulido, id) {
    return ` <tr>
                    <th scope="row">${id}</th>
                    <td>${nev}</td>
                    <td>${kor}</td>
                    <td>${szulido}</td>
                </tr>`;
}
// 3. PÉLDA adatok feltöltése az adatbázidba

function adatfeltoltese() {
    // Adatok lekérése

    var teljesnev = document.getElementById("teljesnev").value;
    var kor = document.getElementById("kor").value;
    var szulido = document.getElementById("szulido").value;

    //adatok vizsgálata
    if (teljesnev.length == 0 || szulido.length == 0) {
        return alert("Hiányzó adatok");
    }
    $.ajax({
        type: "POST", // request (kérés) metódus típusa (POST, GET)
        url: "php/adatokfeltoltese.php" /* itt megívod a használni kivánt php-t*/,
        data: { teljesnev: teljesnev, eletkor: kor, szulido: szulido }, /* Ezt így kérjuk le a php-ban=> $_POST["teljesnev"]; ez fogja tartalmazni
         a teljes nevet (egyszerre számtalan adat is átvihető)*/
        success: function (response) {
            // hiba kezelés
            try {
                if (response === "true") {
                    return alert("Sikeres feltöltés");
                    lekerdezes();
                } else {
                    return alert("Hiba lépett fel a feltöltés során!");
                    //hibaüzenet kiírása
                    console.error(response);
                }
            } catch (err) {
                // hiba kiírása a console-ra
                console.error(err);
            }
        }
    });
}