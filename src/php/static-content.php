<?php /* Template Name: Static Content Template */ 
get_header(); ?>

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