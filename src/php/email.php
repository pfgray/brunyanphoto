<?php

#$data = json_decode($HTTP_RAW_POST_DATA);
$data = json_decode(file_get_contents('php://input'), true);

$name = $data["name"];
$email = $data["email"];
$msg = $data["message"];
$json = array('name' => $name, 'email' => $email, 'message' => $msg);

$msg = nl2br($msg);

// To send HTML mail, the Content-type header must be set
$headers  = 'MIME-Version: 1.0' . "\r\n";
$headers .= 'Content-type: text/html; charset=iso-8859-1' . "\r\n";

// Email
$message_quote = "
<p style='border-left: 2px solid black; background-color: #efefef; padding: 20px; font-style: italic;'>$msg</p>
<p style='font-style: italic; margin-top: 20px; color: #777'>You can respond directly to this email.</p>
";

$client_body = "
<html>
<head>
  <title>Bethanne Runyan Photography Message</title>
</head>
<body>
  <p>$name ($email) sent you a message.</p>
  $message_quote
</body>
</html>
";

$receipt_body = "
<html>
<head>
  <title>Bethanne Runyan Photography</title>
</head>
<body>
  <p>Thank you so much for contacting me. I am beyond thrilled that you found me and can't wait to capture some precious memories. We'll be in touch soon!</p>
  <br />
  <p>Love and Joy,</p>
  <br />
  <p>Bethanne</p>
</body>
</html>
";

$destination_mail = "****@gmail.com";

// mail the client receipt
$receipt_headers = "To: $name <$email>" . "\r\n" . "From: Bethanne Runyan <****@gmail.com>" . "\r\n";
mail($email,"Thanks for contacting Bethanne Runyan Photography",$receipt_body, $headers . $receipt_headers);

// mail the service!
$client_headers = 'To: Paul Gray <****@gmail.com>' . "\r\n" . "From: $name <$email>" . "\r\n";
mail("****@gmail.com","Message from: $name ($email)",$client_body, $headers . $client_headers);
#mail("****@gmail.com","Message from: $name ($email)",$body);

# Todo: also mail receipt to sender?
#mail("****@gmail.com","Message from: $name ($email)",$body);

echo json_encode($json);
?>
