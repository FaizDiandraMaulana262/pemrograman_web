<?php
header("Content-Type: application/json; character=UFT-8");

include "Routes/Routes.php";

use Routes\Routes;

$method = $_SERVER['REQUEST_METHOD'];

$path = parse_url($_SERVER['REQUEST_URI'], PHP_URL_PATH);

$productRoute = new Routes();
$productRoute->handle($method, $path);
