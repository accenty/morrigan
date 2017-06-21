<?php /* Template Name: Home */ get_header(); ?>
	<main>
  <?php
    // check if the flexible content field has rows of data
    if( have_rows('content-elements') ):
         // loop through the rows of data
        while ( have_rows('content-elements') ) : the_row();

            // BEGIN TITLE CONTAINER
            if(get_row_layout() == 'ce_title-container'): ?>
            <div class="title-container ce">
              <figure class="title-image parallax">
                <img src="<?php the_sub_field('ce_title-container-title-image'); ?>" />
              </figure>
              <div class="content-wrap">
                <div class="title-content">
                  <p><?php the_sub_field('ce_title-container-h1'); ?></p>
                  <a href="#" class="scroll-down"><?php the_sub_field('ce_title-container_link-text'); ?></a>
                </div>
              </div>
            </div>
          <?php
					// END TITLE CONTAINER
          // BEGIN DESCRIPTION WITH TEASERS
            elseif( get_row_layout() == 'ce_description-with-teasers' ): ?>
            <div class="description-with-teasers ce">
              <div class="content-wrap">
								<div class="description" style="background-color: #B8CCC2">
									<?php the_sub_field('ce_description-with-teasers_text'); ?>
								</div>
								<?php
									// check if the nested repeater field has rows of data
									if( have_rows('ce_description-with-teasers_teaser') ): ?>
									<div class="image-teasers">
										<?php
										// loop through the rows of data
										while ( have_rows('ce_description-with-teasers_teaser') ) : the_row(); ?>
										<figure>
											<a href="<?php the_sub_field('ce_description-with-teasers_teaser-img-full') ?>" class="lightbox-trigger" title="<?php the_sub_field('ce_description-with-teasers_teaser-img-caption') ?>">
												<img src="<?php the_sub_field('ce_description-with-teasers_teaser-img') ?>" alt="<?php the_sub_field('ce_description-with-teasers_teaser-img-caption') ?>">
											</a>
										</figure>
									<?php endwhile; ?>
								</div>
								<?php
							endif;
							?>
              </div>
              </div>
            </div>
          <?php // END DESCRIPTION WITH TEASERS
            // BEGIN TEXT-TEASERS
            elseif(get_row_layout() == 'ce_text-teasers'): ?>
            <div class="text-teasers ce">
              <div class="content-wrap">
								<?php
									// check if the nested repeater field has rows of data
									if( have_rows('ce_text-teasers_teaser') ): ?>
										<?php
										// loop through the rows of data
										while ( have_rows('ce_text-teasers_teaser') ) : the_row(); ?>
										<a class="teaser" href="<?php the_sub_field('ce_text-teasers_teaser-link'); ?>">
                      <h2>
                        <?php the_sub_field('ce_text-teasers_teaser-headline'); ?>
                      </h2>
                      <?php the_sub_field('ce_text-teasers_teaser-text'); ?>
										</a>
									<?php endwhile; ?>
								<?php
							endif;
							?>
              </div>
            </div>
            <?php
            // END TEXT-TEASERS
            // BEGIN IMAGE GALLERY
            elseif(get_row_layout() == 'ce_image-gallery'): ?>
            <div class="image-gallery ce">
								<?php
									// check if the nested repeater field has rows of data
									if( have_rows('ce_image-gallery_image') ): ?>
										<?php
										// loop through the rows of data
										while ( have_rows('ce_image-gallery_image') ) : the_row(); ?>
                    <figure class="gallery-item">
                      <a class="lightbox-trigger-gallery" href="<?php the_sub_field('ce_image-gallery_image-full'); ?>">
                        <img src="<?php the_sub_field('ce_image-gallery_image-small'); ?>" alt="">
                      </a>
                    </figure>
									<?php endwhile; ?>
								<?php
							endif;
							?>
            </div>
            <?php
            // END IMAGE-GALLERY
            // BEGIN IMAGE-TEXT-ELEMENT
            elseif(get_row_layout() == 'ce_image-text-element'): ?>
            <div class="image-text-element ce">
              <div class="content-wrap">
                <?php the_sub_field('ce_image-text-element_content'); ?>
                <?php if(get_sub_field('ce_image-text-element_call-to-action_url')): ?>
                  <a class="call-to-action" href="<?php the_sub_field('ce_image-text-element_call-to-action_url'); ?>">
                    <?php the_sub_field('ce_image-text-element_call-to-action'); ?>
                  </a>
                <?php endif; ?>
              </div>
            </div>
            <?php
            // END IMAGE-TEXT-ELEMENT
            // BEGIN VIDEO-ELEMENT
            elseif(get_row_layout() == 'ce_video-element'): ?>
            <div class="video-element ce">
							<div class="video-wrapper">
								<?php the_sub_field('ce_video-element_youtube-embed'); ?>
							</div>
            </div>
            <?php
            // END VIDEO-ELEMENT
            // BEGIN TESTIMONIALS
            elseif(get_row_layout() == 'ce_testimonials'): ?>
            <div class="testimonials ce">
              <h3><?php the_sub_field('ce_testimonials_headline'); ?></h3>
                <?php
                	// check if the nested repeater field has rows of data
                	if( have_rows('ce_testimonials_slide') ): ?>
                  <div class="flexslider">
										<ul class="slides">
            			 	<?php // loop through the rows of data
            			    while ( have_rows('ce_testimonials_slide') ) : the_row(); ?>
                      <li class="slide">
                        <div class="inner-content">
                          <?php the_sub_field('ce_testimonials_slide-text'); ?>
                          <div class="user">
                            <figure>
                              <img src="<?php the_sub_field('ce_testimonials_client-photo'); ?>" alt="">
                            </figure>
                            <div class="user-info">
                              <?php the_sub_field('ce_testimonials_client-name'); ?>
                            </div>
                          </div>
                        </div>
                      </li>
            				<?php endwhile; ?>
										</ul>
										<div class="slider-controls-container"></div>
										<div class="slider-navigation">
											<a href="#" class="flex-prev"><span>Prev</span></a>
											<a href="#" class="flex-next"><span>Next</span></a>
										</div>
										</div>
                  </div>
          			<?php
          			endif;
                ?>
            </div>
            <?php
            // END TESTIMONIALS
						elseif(get_row_layout() == 'ce_hero-container'): ?>
						<div class="hero-container ce">
							<div class="content-wrap">
								<?php the_sub_field('ce_hero-container_content'); ?>
								<?php
								 	$shortcode = get_sub_field('ce_hero-container_form-shortcode');
									echo do_shortcode($shortcode);
								?>
							</div>
							<figure class="hero-image">
								<img src="<?php the_sub_field('ce_hero-container_image'); ?>" alt="">
							</figure>
						</div>
						<?php endif;
        endwhile;
    else:
        // no layouts found
    endif;
  ?>
	</main>
<?php get_sidebar(); ?>
<?php get_footer(); ?>
