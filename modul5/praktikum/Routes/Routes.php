<?php

namespace Routes;

include "Traits/ApiResponseFormatter.php";
include "Controller/WaifuController.php";
include "Controller/AnimeController.php";

use Traits\ApiResponseFormatter;
use Controller\WaifuController;
use Controller\AnimeController;

class Routes{
    use ApiResponseFormatter;

    public function handle($method, $path){
        // Waifu
        if ($method === "GET" && $path==="/api/waifu") {
            $controller = new WaifuController();
            echo $this->apiResponse(200, "success", $controller->index()); 
        }
        if ($method === "GET" && strpos($path, '/api/waifu/') === 0) {
            $pathParts = explode('/', $path);
            $id = $pathParts[count($pathParts) - 1];

            $controller = new WaifuController();
            echo $this->apiResponse(200, "success", $controller->getById($id)); 
        }
        if ($method === "POST" && $path==="/api/waifu") {
            $controller = new WaifuController();
            echo $this->apiResponse(200, "success", $controller->insert());
        }
        if ($method === "PUT" && strpos($path, '/api/waifu/') === 0) {
            $pathParts = explode('/', $path);
            $id = $pathParts[count($pathParts) - 1];

            $controller = new WaifuController();
            echo $this->apiResponse(200, "success", $controller->update($id));
        }
        if ($method === "DELETE" && strpos($path, '/api/waifu/') === 0) {
            $pathParts = explode('/', $path);
            $id = $pathParts[count($pathParts) - 1];

            $controller = new WaifuController();
            echo $this->apiResponse(200, "success", $controller->delete($id));
        }

        // Anime
        if ($method === "GET" && $path==="/api/anime") {
            $controller = new AnimeController();
            echo $this->apiResponse(200, "success", $controller->index());
        }
        if ($method === "GET" && strpos($path, '/api/anime/') === 0) {
            $pathParts = explode('/', $path);
            $id = $pathParts[count($pathParts) - 1];

            $controller = new AnimeController();
            echo $this->apiResponse(200, "success", $controller->getById($id)); 
        }
        if ($method === "POST" && $path==="/api/anime") {
            $controller = new AnimeController();
            echo $this->apiResponse(200, "success", $controller->insert());
        }
        if ($method === "PUT" && strpos($path, '/api/anime/') === 0) {
            $pathParts = explode('/', $path);
            $id = $pathParts[count($pathParts) - 1];

            $controller = new AnimeController();
            echo $this->apiResponse(200, "success", $controller->update($id));
        }
        if ($method === "DELETE" && strpos($path, '/api/anime/') === 0) {
            $pathParts = explode('/', $path);
            $id = $pathParts[count($pathParts) - 1];

            $controller = new AnimeController();
            echo $this->apiResponse(200, "success", $controller->delete($id));
        }
    }
}

?>