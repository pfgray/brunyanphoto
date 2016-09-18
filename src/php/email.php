<?php

#$data = json_decode($HTTP_RAW_POST_DATA);
$data = json_decode(file_get_contents('php://input'), true);

$name = $data["name"];
$email = $data["email"];
$msg = $data["message"];
$json = array('name' => $name, 'email' => $email, 'message' => $msg);

$msg = nl2br($msg);

$service_name = "Bethanne Runyan";
$service_email = "******@gmail.com";

// To send HTML mail, the Content-type header must be set
$headers  = 'MIME-Version: 1.0' . "\r\n";
$headers .= 'Content-type: text/html; charset=iso-8859-1' . "\r\n";

// Email
$message_quote = "
<p style='border-left: 2px solid black; background-color: #efefef; padding: 20px; font-style: italic;'>$msg</p>
<p style='font-style: italic; margin-top: 20px; color: #777'>You can respond directly to this email.</p>
";

$service_body = "
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
  <p>
    Love and Joy,<br />
    Bethanne
  </p>
</body>
</html>
";

// mail the client receipt
$receipt_headers = "To: $name <$email>" . "\r\n" . "From: $service_name <$service_email>" . "\r\n";
mail($email,"Thanks for contacting Bethanne Runyan Photography", $receipt_body, $headers . $receipt_headers);

// mail the service!
$service_headers = "To: $service_name <$service_email>" . "\r\n" . "From: $name <$email>" . "\r\n";
mail($service_email, "Message from: $name ($email)", $service_body, $headers . $service_headers);

echo json_encode($json);
?>
