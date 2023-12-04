<?php

namespace Models;

use Config\Database;
use mysqli;

class Anime extends Database{
    public $conn;

    public function __construct()
    {
        $this->conn = new mysqli($this->host, $this->user, $this->password, $this->database_name, $this->port);

        if($this->conn->connect_error){
            die("Connection Failed: ".$this->conn->connect_error);
        }
    }

    public function findAll(){
        $sql = "SELECT * FROM animes";
        $result = $this->conn->query($sql);

        $this->conn->close();
        $data = [];

        while($row = $result->fetch_assoc()){
            $data[] = $row;
        }

        return $data;
    }

    public function findById($id){
        $sql = "SELECT * FROM animes WHERE id = ?";
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
        $anime = $data['anime'];
        $deskripsi = $data['deskripsi'];

        $query = "INSERT INTO animes (anime, deskripsi) VALUES (?, ?)";
        $stnt = $this->conn->prepare($query);

        $stnt->bind_param("ss", $anime, $deskripsi);
        $stnt->execute();
        $this->conn->close();
    }

    public function update($data, $id){
        $anime = $data['anime'];
        $deskripsi = $data['deskripsi'];

        $query = "UPDATE animes SET anime = ?, deskripsi = ? WHERE id = ?";
        $stnt = $this->conn->prepare($query);

        $stnt->bind_param("ssi", $anime, $deskripsi, $id);
        $stnt->execute();
        $this->conn->close();
    }

    public function destroy($id){
        $query = "DELETE FROM animes WHERE id = ?";
        $stnt = $this->conn->prepare($query);

        $stnt->bind_param("i", $id);
        $stnt->execute();
        $this->conn->close();
    }
}

?>