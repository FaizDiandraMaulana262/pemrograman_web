<?php

namespace Controller;

include "Models/Anime.php";

use Models\Anime;

class AnimeController{

    public function index(){
        $animeModel = new Anime();
        $response = $animeModel->findAll();
        return $response;
    }

    public function getById($id){
        $animeModel = new Anime();
        $response = $animeModel->findById($id);
        return $response;
    }

    public function insert(){
        $jsonInput = file_get_contents("php://input");
        $inputData = json_decode($jsonInput, true);

        if(json_last_error()){
            return null;
        }

        $animeModel = new Anime();
        $response = $animeModel->create([
            "anime" => $inputData['anime'],
            "deskripsi" => $inputData['deskripsi']
        ]);

        return $response;
    }

    public function update($id){
        $jsonInput = file_get_contents("php://input");
        $inputData = json_decode($jsonInput, true);

        if(json_last_error()){
            return null;
        }

        $animeModel = new Anime();
        $response = $animeModel->update([
            "anime" => $inputData['anime'],
            "deskripsi" => $inputData['deskripsi']
        ], $id);

        return $response;
    }

    public function delete($id){
        $animeModel = new Anime();
        $response = $animeModel->destroy($id);

        return $response;
    }

}

?>