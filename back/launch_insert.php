<?php
    require "database.php";

    $id_category = $_GET["id_category"];
    $type = $_GET["type"];
    $description = $_GET["description"];
    $value = $_GET["value"];

    $sql = "insert into launch (
            id_category,
            type,
            description,
            value
        ) 
        values (
            :id_category,
            :type,
            :description,
            :value
        )";

    $query = $db->prepare($sql);
    $query->bindParam(":id_category", $id_category, PDO::PARAM_STR);
    $query->bindParam(":type", $type, PDO::PARAM_STR);
    $query->bindParam(":description", $description, PDO::PARAM_STR);
    $query->bindParam(":value", $value, PDO::PARAM_STR);
    $query->execute();
    
    $data = $query->rowCount();
    
    echo json_encode($data)
// <!-- http://pila.br/backend-pila/launch_insert.php?id_category=1&type=1&description=teste&value=999 -->
?>
