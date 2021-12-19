<?php
$json = file_get_contents('php://input');
$info = json_decode($json);
$info->check = "All done!";
$info = json_encode($info);
echo $info;
?>  