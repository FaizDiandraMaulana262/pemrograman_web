<?php
function generator($n)
{
    for ($i = 1; $i <= $n; $i++) {

        if ($i % 3 == 0 && $i % 5 != 0) {
            echo "Hello <br>";
        }

        if ($i % 5 == 0 && $i % 3 != 0) {
            echo "World <br>";
        }

        if ($i % 5 == 0 && $i % 3 == 0) {
            echo "HelloWorld <br>";
        }

        if ($i % 5 != 0 && $i % 3 != 0) {
            echo "$i <br>";
        }
    }
}

generator(15);
