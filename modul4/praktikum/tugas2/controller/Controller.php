<?php
namespace controller;

require_once __DIR__ . "/../response/Response.php";
require_once __DIR__ . '/../data/data.php';

use response\Response;
use data;

class Controller{
    var $dataController;
    
    use Response;
    public function __construct() {
        $this->dataController = new data();
    }

    public function randomData(){
        $data = $this->dataController->data;
        $random = array_rand($data, 1);
        $response = http_response_code();
        $error = true;

        if($response <= 200 && $response < 300)
        {
            $error = false;
            $data = $data[$random];
        }
        else{
            $error = true;
            $data = null;
        }
        echo $this->responseFormatter($response, $error, $data);
    }
}

$controller = new Controller();
$controller->randomData();

?>