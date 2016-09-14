<?php

$data = json_decode(file_get_contents('php://input'), true);

$name = $data["name"];
$email = $data["email"];
$msg = $data["message"];
$json = array('name' => $name, 'email' => $email, 'message' => $msg);

$msg = wordwrap($msg,70);

$body = "Got message from <b>$name</b> ($email).\n\n$msg";

mail("*****@gmail.com","Message from: $name ($email)",$body);

echo json_encode($json);
?>
