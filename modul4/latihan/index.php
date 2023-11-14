<?php
include "Controller/ProductController.php";
use controller\ProductController;

$productController = new ProductController;

echo ($productController->getAllProduct());
?>