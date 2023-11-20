<?php
function generator($n)
{
    for ($i = 1; $i <= $n; $i++) {

        if ($i % 3 == 0 && $i % 5 != 0) {
            echo "Hello \n";
        }

        if ($i % 5 == 0 && $i % 3 != 0) {
            echo "World \n";
        }

        if ($i % 5 == 0 && $i % 3 == 0) {
            echo "HelloWorld \n";
        }

        if ($i % 5 != 0 && $i % 3 != 0) {
            echo "$i \n";
        }
    }
}

generator(15);
