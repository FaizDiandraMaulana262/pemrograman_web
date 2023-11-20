<?php

namespace response;

trait Response{
    public function responseFormatter($code, $message, $data = null){
        return json_encode([
            "status" => $code,
            "error" => $message,
            "data" => $data
        ]);
    }
}
?>