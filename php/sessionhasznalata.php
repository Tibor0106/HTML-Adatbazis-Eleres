<?php


// Session hazsnálata

session_start();

/*adatok tárolása sessionban, ez arra jó, hogy képes adatokat tárolni 
adatbázis nélül, adott ideig (Ez általában webshopnál pl: kosár tartalmát szoktam benne tárolni. Ez csak egy adott 'kliensen jelenik meg. (pl csak a te böngésződben tárólja, ezt más nem tudja elérni)'*/

// Adat eltárolása

$_SESSION["neve"] = "Víz Elek";

$_SESSION["eletkor"] = 0;


// összes adat törlése a sessionból
session_destroy()
    ?>