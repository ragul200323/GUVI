<?php
$conn = new mysqli("localhost","root","","db");
$create = $conn->prepare("CREATE TABLE IF NOT EXISTS `persons` (
    `firstname` varchar(25) NOT NULL,
    `lastname` varchar(25) NOT NULL,
    `email` VARCHAR(50) NOT NULL PRIMARY KEY,
    `password` VARCHAR(25) NOT NULL
  )");
$create->execute();
$create->close();
$insert = $conn->prepare("INSERT INTO persons (firstname,lastname,email,password) VALUES(?,?,?,?)");
$insert->bind_param("ssss",$_POST['firstname'],$_POST['lastname'],$_POST['email'],$_POST['password']);
$result = $insert->execute();
if($result){
    $response=['success'=>true];
}else{
    $response=['success'=>false];
}
$insert->close();
$conn->close();
echo json_encode($response);
?>