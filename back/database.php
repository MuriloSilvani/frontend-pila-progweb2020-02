<?php
    $db_host = "127.0.0.1";
    $db_user = "root";
    $db_pass = "";
    $db_database = "pilas";

    $db = new PDO("mysql:host=".$db_host.";dbname=".$db_database.";charset=utf8", $db_user, $db_pass);

?>