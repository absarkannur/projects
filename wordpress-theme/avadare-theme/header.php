<!DOCTYPE html>
<html <?php language_attributes(); ?>>
<head>
    <meta charset="<?php bloginfo( 'charset' ); ?>" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">

    <!-- Favicon -->
    <link rel="shortcut icon" href="<?php echo get_template_directory_uri(); echo '/assets/icons/favicon.ico'; ?>" type="image/x-icon">
    <link rel="icon" href="<?php echo get_template_directory_uri(); echo '/assets/icons/favicon.ico'; ?>" type="image/x-icon">

    <title><?php bloginfo('name'); ?></title>

    <link href="https://fonts.googleapis.com/css2?family=Raleway:wght@100;300;400;500;600;700;800;900&display=swap" rel="stylesheet">

    <link rel="stylesheet" href="<?php echo get_template_directory_uri(); echo '/assets/carousel/assets/owl.carousel.css'; ?>" />
    <link rel="stylesheet" href="<?php echo get_template_directory_uri(); echo '/assets/carousel/assets/owl.theme.default.css'; ?>" />
    <link rel="stylesheet" href="<?php echo get_template_directory_uri(); echo '/assets/css/animate.min.css'; ?>" />
    <link rel="stylesheet" href="<?php echo get_template_directory_uri(); echo '/assets/css/bootstrap.min.css'; ?>" />
    <link rel="stylesheet" href="<?php echo get_template_directory_uri(); echo '/assets/css/init.css'; ?>" />
    <link rel="stylesheet" href="<?php echo get_template_directory_uri(); echo '/assets/css/style.css'; ?>" />

    <script src="<?php echo get_template_directory_uri(); echo '/assets/js/map.js'; ?>"></script>
    <script src="<?php echo get_template_directory_uri(); echo '/assets/js/sweetalert.min.js'; ?>"></script>

    <script src="<?php echo get_template_directory_uri(); echo '/assets/js/jquery.min.js'; ?>" crossorigin="anonymous"></script>
    <script src="<?php echo get_template_directory_uri(); echo '/assets/js/parallax.min.js'; ?>"></script>

</head>

<body <?php body_class(); ?>>

    <?php get_template_part( 'template-parts/header/nav', 'header' ); ?>