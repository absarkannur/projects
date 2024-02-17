
<?php get_header(); ?>

<?php

    $request_list = addslashes( $_REQUEST['r'] );

    echo '<h1>'. $request_list .'</h1>';

    $args = array(
        'post_type'     => 'avadare_portfolio',
        'category_name' => 'Plot,Building',
        'order'         => 'DESC',
    );

    $list = new WP_Query( $args );

    $list_posts = $list->posts;

    foreach ( $list_posts as $key => $value) {

        $fl = $cfs->get( "portfolio_title", $value->ID );
        $fl_image = $cfs->get( "portfolio_image", $value->ID );

    ?>

        <div>
            <h2><?php echo $fl; ?></h2>
            <img src="<?php echo $fl_image; ?>" alt="">
        </div>

    <?php

    }

    wp_reset_postdata();  
    get_footer();
    
?>