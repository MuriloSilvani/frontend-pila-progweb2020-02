<?php
    require "database.php";

    $sql = "select * from category order by name";

    $query = $db->prepare($sql);
    $query->execute();
    $data = $query->fetchAll(PDO::FETCH_OBJ);
    echo json_encode($data)
?>

<!-- http://pila.br/backend-pila/category_list.php -->