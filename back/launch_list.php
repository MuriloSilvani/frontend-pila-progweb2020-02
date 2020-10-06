<?php
    require "database.php";

    $sql = "select * from launch order by created_at";

    $query = $db->prepare($sql);
    $query->execute();
    $data = $query->fetchAll(PDO::FETCH_OBJ);
    echo json_encode($data)
?>

<!-- http://pila.br/backend-pila/launch_list.php -->