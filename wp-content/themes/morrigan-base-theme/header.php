<!DOCTYPE html>
<html <?php language_attributes(); ?> class="no-js">
	<head>
		<meta charset="<?php bloginfo('charset'); ?>">
		<title><?php wp_title(''); ?><?php	if(wp_title('', false)) { echo ' :'; } ?><?php bloginfo('name'); ?></title>

		<link href="//www.google-analytics.com" rel="dns-prefetch">

		<meta name="theme-color" content="#bc538c">
		<meta name="viewport" content="width=device-width, initial-scale=1.0">

		<meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
		<meta name="description" content="<?php bloginfo('description'); ?>">

		<?php wp_head(); ?>
	</head>
	<body <?php body_class(); ?>>
		<header class="header">
			<div class="content-wrap">
				<a href="<?php echo home_url(); ?>" class="logo">
					<img src="<?php echo get_template_directory_uri(); ?>/img/logo.png" alt="<?php bloginfo('name'); ?>" title="<?php bloginfo('name'); ?>">
				</a>
				<nav class="main-nav">
					<?php wp_nav_menu(array('theme_location' => 'header-navigation')); ?>
				</nav>
			</div>
		</header>
