<?php

namespace Controller;

include "Models/Waifu.php";

use Models\Waifu;

class WaifuController{

    public function index(){
        $waifuModel = new Waifu();
        $response = $waifuModel->findAll();
        return $response;
    }

    public function getById($id){
        $waifuModel = new Waifu();
        $response = $waifuModel->findById($id);
        // return $this->apiResponse(200, "success", $response);
        return $response;
    }

    public function insert(){
        $jsonInput = file_get_contents("php://input");
        $inputData = json_decode($jsonInput, true);

        if(json_last_error()){
            // return $this->apiResponse(400, "error invalid input", null);
            return null;
        }

        $waifuModel = new Waifu();
        $response = $waifuModel->create([
            "name" => $inputData['name'],
            "picture_url" => $inputData['picture_url'],
            "grade" => $inputData['grade'],
            "anime_id" => $inputData['anime_id']
        ]);

        // return $this->apiResponse(200, "success", $response);
        return $response;
    }

    public function update($id){
        $jsonInput = file_get_contents("php://input");
        $inputData = json_decode($jsonInput, true);

        if(json_last_error()){
            // return $this->apiResponse(400, "error invalid input", null);
            return null;
        }

        $waifuModel = new Waifu();
        $response = $waifuModel->update([
            "name" => $inputData['name'],
            "picture_url" => $inputData['picture_url'],
            "grade" => $inputData['grade'],
            "anime_id" => $inputData['anime_id']
        ], $id);

        // return $this->apiResponse(200, "success", $response);
        return $response;
    }

    public function delete($id){
        $waifuModel = new Waifu();
        $response = $waifuModel->destroy($id);

        // return $this->apiResponse(200, "success", $response);
        return $response;
    }

}

?>