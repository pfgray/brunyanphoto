<?php /* Template Name: About */  ?>
<!doctype html>
<html>
<head>
  <meta charset="utf-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
  <title>Bethanne Runyan</title>
  <meta name="description" content="">
  <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no">

	<meta property="og:title" content="Bethanne Runyan">
	<meta property="og:type" content="profile">
	<meta property="og:image" content="<?php the_post_thumbnail_url(); ?>">
  <meta property="og:url" content="<?php get_post_permalink(get_the_ID()); ?>">
  
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
    window.aboutFeaturedImage = "<?php the_post_thumbnail_url() ?>";
  </script>
</head>
<body class="light">
  <!--[if lt IE 8]>
    <p class="browsehappy">You are using an <strong>outdated</strong> browser. Please <a href="http://browsehappy.com/">upgrade your browser</a> to improve your experience.</p>
  <![endif]-->
  <?php get_header(); ?>
  <div id="content">
    <div class="content-inner">
      <div class="about">
        <div class="split">
          <div class="left">
            <?php
            /* Start the Loop */
            while ( have_posts() ) : the_post();
              get_template_part( 'post-content', get_post_format() );
            endwhile; // End of the loop.
            ?>
          </div><div class="right">
            <div id="about-mount" />
          </div>
        </div>
      </div>
    </div>
  </div>

  <script type="text/javascript" src="<?php echo get_bloginfo('template_directory'); ?>/about.js"></script>
</body>
</html>
