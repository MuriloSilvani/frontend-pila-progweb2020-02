<?php
    require "database.php";

    $id = $_GET["id"];
    $description = $_GET["description"];
    $value = $_GET["value"];

    $sql = "update launch set 
            description = :description,
            value = :value
        where
            _id = :id
        ";

    $query = $db->prepare($sql);
    $query->bindParam(":id", $id, PDO::PARAM_STR);
    $query->bindParam(":description", $description, PDO::PARAM_STR);
    $query->bindParam(":value", $value, PDO::PARAM_STR);
    $query->execute();
    
    $data = $query->rowCount();
    
    echo json_encode($data)
// <!-- http://pila.br/backend-pila/launch_update.php?id=1&description=teste&value=999 -->
?>
