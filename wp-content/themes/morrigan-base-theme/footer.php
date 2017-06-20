			<footer class="footer">
				<div class="content-wrap">
					<div class="copyright">
						&copy; <?php echo date('Y'); ?> Copyright <?php bloginfo('name'); ?>. Alle Rechte vorbehalten.
					</div>
					<div class="footer-nav">
						<?php wp_nav_menu(array('theme_location' => 'footer-navigation')); ?>
					</div>
				</div>
			</footer>
		<?php // edit_post_link(); ?>
		<a href="#" class="to-top">
			<span>
				Zurück nach Oben!
			</span>
		</a>
		<?php wp_footer(); ?>
	</body>
</html>
