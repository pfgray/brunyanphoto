<?php /* Template Name: Portfolio */  ?>
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
    <?php
      function get_first_image_by_tag($tag) {
        $media_items = get_attachments_by_media_tags('media_tags='.$tag);
        if ($media_items) {
          $media_item = $media_items[0];
          $item_metadata = wp_get_attachment_metadata($media_item->ID);
          $item_height = $item_metadata['height'];
          $item_width = $item_metadata['width'];
          return "{link:\"".$media_item->guid."\",id:".$media_item->ID.",height:$item_height,width:$item_width}";
        } else {
          return "null";
        }
      }
    ?>
    window.app_config = {
      portfolio:[{
        label: 'Weddings',
        id: 'weddings',
        front: <?php echo get_first_image_by_tag('weddings') ?>,
        link: '/weddings'
      }, {
        label: 'Engagements',
        id: 'engagements',
        front: <?php echo get_first_image_by_tag('engagements') ?>,
        link: '/headshots'
      }, {
        label: 'Kids/Families',
        id: 'families',
        front: <?php echo get_first_image_by_tag('families') ?>,
        link: '/families'
      }, {
        label: 'Maternity',
        id: 'maternity',
        front: <?php echo get_first_image_by_tag('maternity') ?>,
        link: '/maternity'
      }]
    };
  </script>
</head>
<body>
  <!--[if lt IE 8]>
    <p class="browsehappy">You are using an <strong>outdated</strong> browser. Please <a href="http://browsehappy.com/">upgrade your browser</a> to improve your experience.</p>
  <![endif]-->
  <?php get_header(); ?>
  <div id="content"></div>

  <script type="text/javascript" src="<?php echo get_bloginfo('template_directory'); ?>/portfolio.js"></script>
</body>
</html>
