<?php

namespace Models;

include "Config/Database.php";

use Config\Database;
use mysqli;

class Product extends Database{
    public $conn;

    public function __construct()
    {
        $this->conn = new mysqli($this->host, $this->user, $this->password, $this->database_name, $this->port);

        if($this->conn->connect_error){
            die("Connection Failed: ".$this->conn->connect_error);
        }
    }

    public function findAll(){
        $sql = "SELECT * FROM products";
        $result = $this->conn->query($sql);
        // var_dump($result);
        // die;
        $this->conn->close();
        $data = [];

        while($row = $result->fetch_assoc()){
            $data[] = $row;
        }

        return $data;
    }

    public function findById($id){
        $sql = "SELECT * FROM products WHERE id = ?";
        $stnt = $this->conn->prepare($sql);
        $stnt->bind_param("i", $id);
        $stnt->execute();
        $result = $stnt->get_result();
        $this->conn->close();
        $data = [];

        while($row = $result->fetch_assoc()){
            $data[] = $row;
        }

        return $data;
    }

    public function create($data){
        $productName = $data['product_name'];
        $query = "INSERT INTO products (product_name) VALUES (?)";
        $stnt = $this->conn->prepare($query);
        $stnt->bind_param("s", $productName);
        $stnt->execute();
        $this->conn->close();
    }

    public function update($data, $id){
        $productName = $data['product_name'];

        $query = "UPDATE products SET product_name = ? WHERE id = ?";
        $stnt = $this->conn->prepare($query);

        $stnt->bind_param("si", $productName, $id);
        $stnt->execute();
        $this->conn->close();
    }

    public function destroy($id){
        $query = "DELETE FROM products WHERE id = ?";
        $stnt = $this->conn->prepare($query);

        $stnt->bind_param("i", $id);
        $stnt->execute();
        $this->conn->close();
    }
}

?>