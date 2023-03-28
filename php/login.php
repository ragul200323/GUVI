<?php
$conn = new mysqli("localhost","root","","db");
$stmt = $conn->prepare("SELECT * FROM persons WHERE email = ? ");
$stmt->bind_param("s",$_POST['email']);
$stmt->execute();
$result=$stmt->get_result();
if($result->num_rows > 0){
        $row = $result->fetch_assoc();
        if($row['password']===$_POST['password']){
            $response=['success'=>true,'message'=>$row['firstname']];
        }else{
            $response=['success'=>false,'message'=>$row['firstname']];
        }
}else{
    $response=['success'=>false,'message'=>$row['firstname']];
}
$stmt->close();
$conn->close();
echo json_encode($response);
?>