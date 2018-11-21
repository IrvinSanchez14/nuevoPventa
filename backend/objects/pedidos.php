<?php

  class Pedidos{
    // database connection and table name
    private $conn;
    private $table_name = "productos";
    private $table_user = "usuarios";

    public $ID_producto;
    public $nombre;
    public $precio;
    public $nodo_sugerido;

    public $ID_usuarios;
    public $usuario;
    public $nivel;

    // constructor with $db as database connection
    public function __construct($db){

      $this->conn = $db;

    }
    // leer todos los productos del restaurante
    function readProduct(){
      // select all query
      $query = "SELECT
          pr.ID_producto, pr.nombre, pr.precio, pr.nodo_sugerido
        FROM
          " . $this->table_name . " pr
        WHERE
          pr.disponible = 1
        ORDER BY
          pr.ID_producto DESC";
      // prepare query statement
      $stmt = $this->conn->prepare($query); 
      // execute query
      $stmt->execute();
      return $stmt;
    }

    function readUser() {

      $query = "SELECT
          us.ID_usuarios, us.usuario, us.nivel
        FROM
          " . $this->table_user . " us
        WHERE
          us.disponible = 1
        ORDER BY
          us.ID_usuarios ASC";
      $stmt = $this->conn->prepare($query);
      $stmt->execute();
      return $stmt;

    }

    public function count(){
      $query = "SELECT COUNT(*) as total_rows FROM " . $this->table_name . "";  
      $stmt = $this->conn->prepare( $query );
      $stmt->execute();
      $row = $stmt->fetch(PDO::FETCH_ASSOC);
      return $row['total_rows'];
    }

  } 

?>