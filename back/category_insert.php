<?php
    require "database.php";

    $name = $_GET["name"];

    $sql = "insert into category (name) values (:name)";

    $query = $db->prepare($sql);
    $query->bindParam(":name", $name, PDO::PARAM_STR);
    $query->execute();
    
    $data = $query->rowCount();
    
    echo json_encode($data)
?>

<!-- http://pila.br/backend-pila/category_insert.php?name=teste -->