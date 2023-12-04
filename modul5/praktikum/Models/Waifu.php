<?php

namespace Models;

include "Config/Database.php";

use Config\Database;
use mysqli;

class Waifu extends Database{
    public $conn;

    public function __construct()
    {
        $this->conn = new mysqli($this->host, $this->user, $this->password, $this->database_name, $this->port);

        if($this->conn->connect_error){
            die("Connection Failed: ".$this->conn->connect_error);
        }
    }

    public function findAll(){
        $sql = "SELECT * FROM characters JOIN animes ON animes.id = characters.anime_id";
        $result = $this->conn->query($sql);

        $this->conn->close();
        $data = [];

        while($row = $result->fetch_assoc()){
            $data[] = $row;
        }

        return $data;
    }

    public function findById($id){
        $sql = "SELECT * FROM characters JOIN animes ON animes.id = characters.anime_id WHERE characters.id = ?;
        ";
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
        $name = $data['name'];
        $picture_url = $data['picture_url'];
        $grade = $data['grade'];
        $anime_id = $data['anime_id'];

        $query = "INSERT INTO characters (name, picture_url, grade, anime_id) VALUES (?, ?, ?, ?)";
        $stnt = $this->conn->prepare($query);

        $stnt->bind_param("ssii", $name, $picture_url, $grade, $anime_id);
        $stnt->execute();
        $this->conn->close();
    }

    public function update($data, $id){
        $name = $data['name'];
        $picture_url = $data['picture_url'];
        $grade = $data['grade'];
        $anime_id = $data['anime_id'];

        $query = "UPDATE characters SET name = ?, picture_url = ?, grade = ?, anime_id = ? WHERE id = ?";
        $stnt = $this->conn->prepare($query);

        $stnt->bind_param("ssiii", $name, $picture_url, $grade, $anime_id, $id);
        $stnt->execute();
        $this->conn->close();
    }

    public function destroy($id){
        $query = "DELETE FROM characters WHERE id = ?";
        $stnt = $this->conn->prepare($query);

        $stnt->bind_param("i", $id);
        $stnt->execute();
        $this->conn->close();
    }
}

?>