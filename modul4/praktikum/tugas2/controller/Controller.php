<?php

namespace controller;

include __DIR__ . "/../response/Response.php";
include __DIR__ . '/../data/data.php';

use response\Response, data;

class Controller extends data
{
    var $dataController;
    use Response;

    public function __construct()
    {
        $this->dataController = $this->data;
    }
    
    public function randomData()
    {
        $data = $this->dataController;
        $random = array_rand($data, 1);
        $response = http_response_code();
        $error = true;

        if ($response <= 200 && $response < 300) {
            $error = false;
            $data = $data[$random];
        } else {
            $error = true;
            $data = null;
        }

        header('Content-Type: application/json');
        header("Access-Control-Allow-Origin: *");
        header("Access-Control-Allow-Headers: *");

        echo json_encode($this->responseFormatter($response, $error, $data));
    }
}