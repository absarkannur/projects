<?php

    // Add Media
    function load_media_files() {
        wp_enqueue_media();
    }
    add_action( 'admin_enqueue_scripts', 'load_media_files' );

    // Menu
    add_theme_support( 'menus' );

    // Featured Image
	add_theme_support( 'post-thumbnails' );

    	// Automatic Feed Links
	add_theme_support( 'automatic-feed-links' );

	// Add Post Formats
	add_theme_support( 'post-formats',  array ( 'aside', 'gallery', 'quote', 'image', 'video' ) );

    register_nav_menus(
        array(
            "top-menu" => "Top Menu Location",
            "footer-menu" => "Footer Menu Location",
            "mobile-menu" => "Mobile Menu Location",
        )
    );

    // Categories for Page
    add_action( 'init', 'add_page_categories' );
    function add_page_categories(){
        register_taxonomy_for_object_type('category', 'page'); 
    }

    /* Register WordPress  Gutenberg CPT ================================================================== */

    function av_project_post_type() {
        register_post_type( 'avadare_projects',
            // WordPress CPT Options Start
            array(
                'labels' => array(
                    'name' => __( 'Avadare Projects' ),
                    'singular_name' => __( 'Avadare Projects' )
                ),
                'hierarchical' 		=> true,
                'public'            => true,
                'has_archive'       => false,
                'show_in_rest'      => true,
                'rewrite'           => array('slug' => 'avadare_projects'),
                'supports'          => array('title', 'editor', 'thumbnail'),
                'menu_icon'			=> get_template_directory_uri(). '/images/admin-icon.png',
				'menu_position'		=> 99,
                'taxonomies'        => array( 'category' ),
            )
        );
    }
    
    add_action( 'init', 'av_project_post_type' );

    // ================================================================ //

    function av_portfolio_post_type() {
        register_post_type( 'avadare_portfolio',
            // WordPress CPT Options Start
            array(
                'labels' => array(
                    'name' => __( 'Avadare Portfolio' ),
                    'singular_name' => __( 'Avadare Portfolio' ),
                ),
                'hierarchical' 		=> true,
                'public'            => true,
                'has_archive'       => false,
                'show_in_rest'      => true,
                'rewrite'           => array('slug' => 'avadare_portfolio'),
                'supports'          => array('title', 'editor', 'thumbnail'),
                'menu_icon'			=> get_template_directory_uri(). '/images/admin-icon.png',
				'menu_position'		=> 99,
                'taxonomies'        => array( 'category' ),
            )
        );
    }
    
    add_action( 'init', 'av_portfolio_post_type' );

    // ================================================================ //

    // function theme_prefix_rewrite_flush() {
    //     flush_rewrite_rules();
    // }
    // add_action( 'after_switch_theme', 'theme_prefix_rewrite_flush' );


    // Remove wrapper block from lazy blocks 
    add_filter( 'lzb/block_render/allow_wrapper', '__return_false' );

    // Ajax Enquiry Form ==============================================
    add_action( 'wp_ajax_enquiry', 'enquiry_form' );
    add_action( 'wp_ajax_nopriv_enquiry', 'enquiry_form' );

    function enquiry_form(){

        if( !wp_verify_nonce( $_POST['nonce'], 'avadare_dv_ghalia' ) ){
            wp_send_json_error( 'Nonce is incorrect', 401 );
            die();
        }

        $formdata = [];
        wp_parse_str( addslashes( $_POST['enquiry'] ), $formdata );

        // Admin Mail
        $admin_mail = get_option('admin_email');
        
        // Headers
        $headers[] = 'Content-Type: text/html; charset=UTF-8';
        $headers[] = 'Form: Avadare Website <'.$admin_mail.'>';
        $headers[] = 'Reply-to:'.$formdata['user_mail'];

        // To
        $send_to = $admin_mail;

        // Subject
        $subject = "Avadare Website from " . $formdata['user_name'];

        // Message
        $message = '';

        foreach ($formdata as $key => $value)
        {
            $message .= '<strong>' . $key . '</strong>: ' . $value .'<br />';
        }

        try{

            if( wp_mail(  $send_to, $subject, $message, $headers ) ){
                wp_send_json_success( 'Email Sent' );
            } else {
                wp_send_json_error( 'Email Error' );
            }

        } catch ( Exception $e ){
            wp_send_json_error( $e->getMessage() );
        }
        

    }


    // Ajax careers Form ==============================================
    add_action( 'wp_ajax_careers', 'careers_form' );
    add_action( 'wp_ajax_nopriv_careers', 'careers_form' );

    function careers_form(){

        if( !wp_verify_nonce( $_POST['nonce'], 'avadare_dv_ghalia' ) ){
            wp_send_json_error( 'Nonce is incorrect', 401 );
            die();
        }

        $formdata = [];
        wp_parse_str( addslashes( $_POST['careers'] ), $formdata );

        // File save and share :-

        $uploaded_file = wp_upload_bits( $_FILES['file']['name'], null, @file_get_contents( $_FILES['file']['tmp_name'] ) );
        $attachments = $uploaded_file['url'];

        // Admin Mail
        $admin_mail = get_option('admin_email');
        
        // Headers
        $headers[] = 'Content-Type: text/html; charset=UTF-8';
        $headers[] = 'Form: Avadare Website <'.$admin_mail.'>';
        $headers[] = 'Reply-to:'.$formdata['user_mail'];

        // To
        $send_to = $admin_mail;

        // Subject
        $subject = "Avadare Website from " . $formdata['user_name'];

        // Message
        $message = '';

        foreach ($formdata as $key => $value)
        {
            $message .= '<strong>' . $key . '</strong>: ' . $value .'<br />';
        }

        try{

            if( wp_mail(  $send_to, $subject, $message, $headers, $attachments ) ){
                wp_send_json_success( 'Email Sent' );
            } else {
                wp_send_json_error( 'Email Error' );
            }

        } catch ( Exception $e ){
            wp_send_json_error( $e->getMessage() );
        }
        

    }

    // ================================================================
    
    /*
     * Register Custom Navigation Walker
     */

    function register_navwalker(){
        require_once get_template_directory() . '/class-wp-bootstrap-navwalker.php';
    }
    add_action( 'after_setup_theme', 'register_navwalker' );
    
    // ================================================================

    require get_template_directory() . '/inc/function-admin.php';
    require get_template_directory() . '/inc/enqueue.php';