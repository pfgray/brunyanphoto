<?php
/**
 * The template for displaying all single posts
 *
 * @link https://developer.wordpress.org/themes/basics/template-hierarchy/#single-post
 *
 * @package WordPress
 * @subpackage Bethannne Runyan Photography
 * @since 1.0
 * @version 1.0
 */ ?>
<!doctype html>
<html>
<head>
  <meta charset="utf-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
  <meta name="google" content="notranslate">
  <meta http-equiv="Content-Language" content="en">
	<title><?php the_title(); ?></title>
	<meta property="og:title" content="<?php the_title(); ?>">
	<meta property="og:image" content="<?php the_post_thumbnail_url(); ?>">
	<meta property="og:url" content="<?php get_post_permalink(get_the_ID()); ?>">
	<meta property="og:type" content="article">
	<meta property="og:article:modified_time" content="<?php get_post_time('c'); ?>">

  <meta name="description" content="">
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
<body class="">
	<?php get_header(); ?>
	<script src='/wp-includes/js/comment-reply.min.js?ver=4.8.2'></script>

	<div id="content">
		<div>
			<div id="primary" class="content-area">
				<main id="main" class="site-main" role="main">

					<?php
					/* Start the Loop */
					while ( have_posts() ) : the_post();
					?>
						<div class="post-title-img single" style="background-image: url('<?php the_post_thumbnail_url() ?>')"></div>
						<div class="post-title">
							<span class="post-date"><?php the_date(); ?></span>
							<a href="<?php the_permalink(); ?>"><?php the_title(); ?></a>
						</div>

						<div class="post-content">
						<?php
						get_template_part( 'post-content', get_post_format() );

						// If comments are open or we have at least one comment, load up the comment template.
						if ( comments_open() || get_comments_number() ) :
							comments_template();
						endif;

						the_post_navigation( array(
							'prev_text' => '<span class="screen-reader-text">' . __( 'Previous Post', 'twentyseventeen' ) . '</span><span aria-hidden="true" class="nav-subtitle">' . __( 'Previous', 'twentyseventeen' ) . '</span> <span class="nav-title"><span class="nav-title-icon-wrapper">' . "left?" . '</span>%title</span>',
							'next_text' => '<span class="screen-reader-text">' . __( 'Next Post', 'twentyseventeen' ) . '</span><span aria-hidden="true" class="nav-subtitle">' . __( 'Next', 'twentyseventeen' ) . '</span> <span class="nav-title">%title<span class="nav-title-icon-wrapper">' . "right?" . '</span></span>',
						) );
						?>
						</div>
					<?php endwhile; ?>

				</main><!-- #main -->
			</div><!-- #primary -->
		</div><!-- .wrap -->
	</div>
</body>
</html>
