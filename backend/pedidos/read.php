<?php

  header("Access-Control-Allow-Origin: *");
  header("Access-Control-Allow-Headers: access");
  header("Access-Control-Allow-Methods: GET");
  header("Access-Control-Allow-Credentials: true");
  header('Content-Type: application/json');

  include_once '../config/database.php';
  include_once '../objects/pedidos.php';
  
  $database = new Database();
  $db = $database->getConnection();

  $actividad = new Pedidos($db);

  $stmt = $actividad->readProduct();
  $num = $stmt->rowCount();

  if($num>0){
    $actividad_arr=array();
    $actividad_arr["registro"]=array();
    while ($row = $stmt->fetch(PDO::FETCH_ASSOC)){
      extract($row);
      $actividad_item=array(
        "ID_producto" => $ID_producto,
        "nombre" => $nombre,
        "precio" => $precio,
        "nodo_sugerido" => $nodo_sugerido,
      );
      array_push($actividad_arr["registro"], $actividad_item);
    } 
    echo json_encode($actividad_arr);
  } 
  else{
    echo json_encode(
      array("message" => "No products found.")
    );
  }

?>