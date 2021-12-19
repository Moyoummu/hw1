<?php
$name = htmlspecialchars($_POST["name"]);
$job = htmlspecialchars($_POST["job"]);
echo 'Name: ', $name, '<br/>';
echo 'Employment: ', $job, '<br/>';
?> 