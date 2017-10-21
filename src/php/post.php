<?php /* Template Name: Post Template */ ?>
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
  </script>
</head>
<body>
  <!--[if lt IE 8]>
    <p class="browsehappy">You are using an <strong>outdated</strong> browser. Please <a href="http://browsehappy.com/">upgrade your browser</a> to improve your experience.</p>
  <![endif]-->
  <h1>Hrm...</h1>
  <div id="content"></div>

  <script type="text/javascript" src="<?php echo get_bloginfo('template_directory'); ?>/main.js"></script>
</body>
</html>
