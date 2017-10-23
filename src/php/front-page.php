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
    window.app_config = {
      imgur: {
        client_id: '114ac9e0eea41c1',
        main_album: 'rZTXS'
      },
      portfolio:[{
        label: 'Weddings',
        id: '9k9yU',
        link: '/weddings'
      }, {
        label: 'Engagements',
        id: 'aY0TY',
        link: '/headshots'
      }, {
        label: 'Kids/Families',
        id: 'QS098',
        link: '/families'
      }, {
        label: 'Maternity',
        id: 'Nt7FD',
        link: '/newborn'
      }]
    };

    window.frontImages = [
      <?php
        $media_items = get_attachments_by_media_tags('media_tags=front');
        if ($media_items) {
          foreach ($media_items as &$media_item) {
            $full_media_item = wp_get_attachment_metadata($media_item->ID);
            //echo "//".print_r($full_media_item);
            $item_height = $full_media_item['height'];
            $item_width = $full_media_item['width'];
            echo "{link:\"".$media_item->guid."\",id:".$media_item->ID.",height:$item_height,width:$item_width},";
          }
        }
        ?>
    ];

  </script>
</head>
<body>
  <!--[if lt IE 8]>
    <p class="browsehappy">You are using an <strong>outdated</strong> browser. Please <a href="http://browsehappy.com/">upgrade your browser</a> to improve your experience.</p>
  <![endif]-->
  <?php get_header(); ?>
  <div id="content"></div>

  <script type="text/javascript" src="<?php echo get_bloginfo('template_directory'); ?>/main.js"></script>
</body>
</html>
