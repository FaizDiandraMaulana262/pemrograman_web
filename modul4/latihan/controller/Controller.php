<?php

namespace controller;

class Controller{
    var $controllerName;
    var $controllerMethod;

    public function getControllerAttribute(){
        return[
            "ControllerName" => $this->controllerName,
            "Method" => $this->controllerMethod
        ];
    }
}
?>