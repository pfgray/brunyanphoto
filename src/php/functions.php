<?php
  add_theme_support( 'custom-header' );
  add_theme_support( 'post-thumbnails' );
  add_theme_support( 'post-formats', array( 'post', 'page', 'gallery' ) );
  // require_once ('gallery-shortcode.php');


  function my_awesome_func() {
    return "uhrm...";
  }

  add_action( 'rest_api_init', function () {
    register_rest_route( 'brunyanphoto/v1', '/email', array(
      'methods' => 'POST',
      'callback' => 'email_peeps',
    ) );
  } );


  function email_peeps($request) {
    $data = $request->get_json_params();
    
    $name = $data["name"];
    $email = $data["email"];
    $msg = $data["message"];
    $json = array('name' => $name, 'email' => $email, 'message' => $msg);
    
    $msg = nl2br($msg);
    
    $service_name = "Bethanne Runyan";
    $service_email = "pfbgray@gmail.com";
    
    // To send HTML mail, the Content-type header must be set
    $headers  = 'MIME-Version: 1.0' . "\r\n";
    $headers .= 'Content-type: text/html; charset=iso-8859-1' . "\r\n";
    
    // Email
    $service_body = "
    <html>
      <head>
        <title>Bethanne Runyan Photography Message</title>
      </head>
      <body>
        <p>$name ($email) sent you a message.</p>
        <p style='border-left: 2px solid black; background-color: #efefef; padding: 20px; font-style: italic;'>$msg</p>
        <p style='font-style: italic; margin-top: 20px; color: #777'>You can respond directly to this email.</p>
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
    wp_mail($email,"Thanks for contacting Bethanne Runyan Photography", $receipt_body, $headers . $receipt_headers);
    
    // mail the service!
    $service_headers = "To: $service_name <$service_email>" . "\r\n" . "From: $name <$email>" . "\r\n";
    wp_mail($service_email, "Message from: $name ($email)", $service_body, $headers . $service_headers);
    
    return $json;
  }
 ?>