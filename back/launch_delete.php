<?php
    require "database.php";

    $id = $_GET["id"];

    $sql = "delete from launch where _id = :id";

    $query = $db->prepare($sql);
    $query->bindParam(":id", $id, PDO::PARAM_STR);
    $query->execute();
    
    $data = $query->rowCount();
    
    echo json_encode($data)
// <!-- http://pila.br/backend-pila/launch_delete.php?id=1 -->
?>
