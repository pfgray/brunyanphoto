<?php /* Template Name: Static Content Template */ ?>
<!doctype html>
<html>
<head>
  <meta charset="utf-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
	<title><?php the_title(); ?></title>
	<meta property="og:title" content="<?php the_title(); ?>">
	<meta property="og:image" content="<?php the_post_thumbnail_url(); ?>">
	<meta property="og:url" content="<?php get_post_permalink(get_the_ID()); ?>">
	<meta property="og:article:modified_time" content="<?php get_post_time('c'); ?>">

  <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no">
  <style>
      html, body, #content {
        height:100%;
        width: 100%;
        margin:0;
      }
  </style>
  <script>
    window.publicAssetPath = "<?php echo get_bloginfo('template_directory'); ?>/";
  </script>
</head>
<body class="light">
  <!--[if lt IE 8]>
    <p class="browsehappy">You are using an <strong>outdated</strong> browser. Please <a href="http://browsehappy.com/">upgrade your browser</a> to improve your experience.</p>
  <![endif]-->
  <?php get_header(); ?>
  <div id="content">
    <div class="content-inner">
      <div id="primary" class="content-area">
        <main id="main" class="site-main" role="main">

          <?php
            /* Start the Loop */
            while ( have_posts() ) : the_post();
              get_template_part( 'post-content', get_post_format() );
            endwhile; // End of the loop.
          ?>

        </main><!-- #main -->
      </div><!-- #primary -->
    </div><!-- .wrap -->
  </div>
</body>
</html>