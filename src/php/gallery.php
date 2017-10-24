<?php /* Template Name: Gallery */  ?>
<!doctype html>
<html>
<head>
  <meta charset="utf-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
  <title></title>
  <meta name="description" content="">
  <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no">
  <style>
      html, body, #content {
        background: #222;
        height:100%;
        width: 100%;
        margin:0;
      }
  </style>
  <script>
    window.publicAssetPath = "<?php echo get_bloginfo('template_directory'); ?>/";
    
    window.galleryImages = [
      <?php

        // Retrieve the first gallery in the post
        $gallery = get_post_gallery( $post , false);
         
        // Loop through each image in each gallery
        foreach( explode(',', $gallery['ids']) as $key=>$image_id ) {
          $item_metadata = wp_get_attachment_metadata($image_id);
          $item_url = wp_get_attachment_url($image_id);
          $item_height = $item_metadata['height'];
          $item_width = $item_metadata['width'];
          echo "{link:\"".$item_url."\",id:".$image_id.",height:$item_height,width:$item_width},";
        }

        ?>
    ];
  </script>
</head>
<body class="light">
  <!--[if lt IE 8]>
    <p class="browsehappy">You are using an <strong>outdated</strong> browser. Please <a href="http://browsehappy.com/">upgrade your browser</a> to improve your experience.</p>
  <![endif]-->
  <?php get_header(); ?>
  <div id="content"></div>

  <script type="text/javascript" src="<?php echo get_bloginfo('template_directory'); ?>/gallery.js"></script>
</body>
</html>