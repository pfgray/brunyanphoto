<?php  /* Template Name: Posts Page */ ?>
<!doctype html>
<html>
<head>
  <meta charset="utf-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
  <title><?php get_the_title(); ?></title>
  <meta name="description" content="">
  <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no">
</head>
<body class="light">
  <!--[if lt IE 8]>
    <p class="browsehappy">You are using an <strong>outdated</strong> browser. Please <a href="http://browsehappy.com/">upgrade your browser</a> to improve your experience.</p>
  <![endif]-->
  <?php get_header(); ?>

  <div id="content">
    <div class="posts-inner">

      <div id="primary" class="content-area">
        <main id="main" class="site-main" role="main">

        <div class="post-content">
          <?php get_the_title(); ?>
        </div>

        <?php
        // the query
        $wpb_all_query = new WP_Query(array('post_type'=>'post', 'post_status'=>'publish', 'posts_per_page'=>-1)); ?>
        
        <?php if ( $wpb_all_query->have_posts() ) : ?>
          <ul class="post-list">
            <!-- the loop -->
            <?php while ( $wpb_all_query->have_posts() ) : $wpb_all_query->the_post(); ?>
              <li>
                <div class="post-title" style="background-image: url('<?php the_post_thumbnail_url() ?>')">
                  <div class="post-content">
                    <a href="<?php the_permalink(); ?>"><?php the_title(); ?></a>
                    <span class="post-date"><?php the_date(); ?></span>
                  </div>
                </div>
                <div class="post-body post-content"><?php the_content(); ?></div>
              </li>
            <?php endwhile; ?>
            <!-- end of the loop -->
          </ul>
        
          <?php wp_reset_postdata(); ?>
        
        <?php else : ?>
            <p><?php _e( 'Sorry, no posts matched your criteria.' ); ?></p>
        <?php endif; ?>

        </main><!-- #main -->
      </div><!-- #primary -->
    </div><!-- .wrap -->
  </div>
</body>
</html>
