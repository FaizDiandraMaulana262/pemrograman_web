<?php

namespace response;

trait Response{
    public function responseFormatter($code, $message, $data = null){
        return ([
            "status" => $code,
            "error" => $message,
            "data" => $data
        ]);
    }
}
?>