<?php
/**
 * The template for displaying all single posts
 *
 * @link https://developer.wordpress.org/themes/basics/template-hierarchy/#single-post
 *
 * @package WordPress
 * @subpackage Twenty_Seventeen
 * @since 1.0
 * @version 1.0
 */
get_header(); ?>
<script src='/wp-includes/js/comment-reply.min.js?ver=4.8.2'></script>

<div id="content">
	<div>
		<div id="primary" class="content-area">
			<main id="main" class="site-main" role="main">

				<?php
				/* Start the Loop */
				while ( have_posts() ) : the_post();
				?>
					<div class="post-title single" style="background-image: url('<?php the_post_thumbnail_url() ?>')">
						<div class="post-content">
							<a href="<?php the_permalink(); ?>"><?php the_title(); ?></a>
							<span class="post-date"><?php the_date(); ?></span>
						</div>
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
